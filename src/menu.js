import img from './images/menu.jpg';

export function menuPage() {

    // Handle Buttons //
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.classList.remove('current')
    })

    const button = document.querySelector("#menuBtn")

    button.classList.add('current')


    // Build Header //

    const header = document.querySelector('header');
    if (header.childElementCount > 1){
        header.removeChild(header.lastChild)
        header.style.cssText = "background-image: none;"
    }


    const titleDiv = document.createElement('div');
    const title = document.createElement('h2');

    header.style.backgroundImage = `url(${img})`

    title.textContent = button.textContent;

    titleDiv.appendChild(title)
    header.appendChild(titleDiv)


    titleDiv.classList.add('title');







    const container = document.querySelector('#content')
    container.textContent = ''
    container.style.cssText = "background-color: rgb(31, 31, 39)"

    container.className = "menu-content"
}