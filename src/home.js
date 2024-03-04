import img from './images/home.jpg';

export function homePage() {
    const header = document.querySelector('header')

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.classList.remove('current')
    })

    const button = document.querySelector("#homeBtn")

    button.classList.add('current')

    if (header.childElementCount > 1){
        header.removeChild(header.lastChild)
        header.style.cssText = "background-image: none;"
    }


    const container = document.querySelector('#content')
    container.textContent = '';
    container.style.cssText = "background-color: var(--header-color)"

    const photo = document.createElement('img');
    photo.src = img;
    photo.height = '400';

    container.append(photo)
    container.className = "home-content"
}