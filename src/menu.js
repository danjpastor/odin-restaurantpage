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


    // Menu Container //
    const container = document.querySelector('#content')
    container.textContent = ''
    container.style.cssText = "background-color: rgb(31, 31, 31)"

    container.className = "menu-content"
    container.style.cssText = "display: flex; flex-direction: column; align-items: center; gap: 100px;"

    const menu = [
        {
            'name': "Chicken Parmesean",
            'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque metus nec elementum feugiat.",
            'price': 10
        },
        {
            'name': "Potato Gnochi",
            'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque metus nec elementum feugiat.",
            'price': 8
        },
        {
            'name': "Shrimp Alfredo",
            'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque metus nec elementum feugiat.",
            'price': 13
        },
        {
            'name': "Lobster Bisque",
            'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque metus nec elementum feugiat.",
            'price': 17
        },
        {
            'name': "Surf & Turf",
            'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque metus nec elementum feugiat.",
            'price': 22
        }
    ]

    const subTitle = document.createElement('div');
    subTitle.style.cssText = "display: flex; flex-direction: column; align-items:center;"

    const sectionHeading = document.createElement('h3');
    sectionHeading.classList.add('menu-section-header');
    sectionHeading.textContent = "Food Menu";

    const welcome = document.createElement('h2')
    welcome.textContent = "Most Popular Items"
    welcome.style.cssText = "font-size: 2rem; color: white; margin: 0px;"

    subTitle.append(sectionHeading, welcome)
    container.append(subTitle)

    const itemList = document.createElement('div');
    itemList.classList.add('menuList');

    for (let i=0; i < menu.length; i++){
        const item = document.createElement('div');
        item.classList.add('item');

        const top = document.createElement('div');
        top.style.cssText = "display: flex; justify-content: space-between; align-items: center;";

        const name = document.createElement('h3');
        name.style.cssText = "font-family: Nunito, cursive; color: white;"

        const price = document.createElement('h3');
        price.style.cssText = "color: orange; font-family: Pacifico; font-size: 1.5rem;"

        const divider = document.createElement('hr');
        divider.style.cssText = "width: 100%; margin: 0px; padding: 0px;"

        const desc = document.createElement('p');
        desc.style.cssText = "font-family: Nunito;"

        name.textContent = menu[i].name
        price.textContent = menu[i].price
        desc.textContent = menu[i].desc

        top.append(name, price);
        item.append(top, divider, desc);
        itemList.append(item)
    }

    container.appendChild(itemList)
}