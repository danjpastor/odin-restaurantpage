import img from "./images/photo01.jpg";
import img2 from "./images/photo02.jpg";


export function homePage() {


    const header = document.querySelector('header')

    // Handle Buttons //

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

    // Handle Content //

    const container = document.querySelector('#content')
    container.textContent = '';
    container.style.cssText = "background-color: var(--header-color)"
    container.className = "home-content"

    const section = document.createElement('section');
    section.classList.add('homeSection')
    const childOne = document.createElement('div');
    childOne.classList.add('rightPane')
    const childTwo = document.createElement('div');
    childTwo.classList.add('leftPane')

    const sectionTitle = document.createElement('h3');
    sectionTitle.classList.add('section-header')
    sectionTitle.textContent = 'About Us';

    const welcomeText = document.createElement('h2');
    welcomeText.textContent = 'Welcome to Odin Cafe!'
    welcomeText.classList.add('welcome')

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    p2.textContent = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."



    const photo01 = document.createElement('img');
    photo01.src = img
    photo01.style.cssText = "width: 100%; grid-area: 1 / 1 / 1 / 1; border-radius: 20px"

    const photo02 = document.createElement('img');
    photo02.src = img2
    photo02.style.cssText = "width: 75%; grid-area: 1 / 2 / 2 / 3; display: flex; align-self: flex-end; border-radius: 20px"

    childTwo.append(photo01, photo02)

    childOne.append(sectionTitle, welcomeText, p1, p2)
    section.append(childTwo, childOne)
    container.append(section)
}