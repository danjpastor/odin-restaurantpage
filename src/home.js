import img from './images/home.jpg';

export function homePage() {
    const container = document.querySelector('#content')
    container.textContent = ''

    const photo = document.createElement('img');
    photo.src = img;
    photo.height = '400';

    container.append(photo)
    container.className = "home-content"
}