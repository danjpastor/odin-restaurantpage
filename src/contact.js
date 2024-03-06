import img from './images/contact.jpg';

export function contactPage() {

    // Handle Buttons //
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.classList.remove('current')
    })

    const button = document.querySelector("#contactBtn")

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


    // Contact Container //
    const container = document.querySelector('#content')
    container.textContent = ''
    container.style.cssText = "background-color: rgb(31, 31, 31)"

    container.className = "contact-content"
    container.style.cssText = "display: flex; flex-direction: column; align-items: center; gap: 100px;"


    const subTitle = document.createElement('div');
    subTitle.style.cssText = "display: flex; flex-direction: column; align-items:center;"

    const sectionHeading = document.createElement('h3');
    sectionHeading.classList.add('menu-section-header');
    sectionHeading.textContent = "Contact Us";


    subTitle.append(sectionHeading)
    container.append(subTitle)

    const form = document.createElement('form');
    form.classList.add('contact-form');
    form.style.cssText = 'display: flex; flex-direction: column; gap: 15px;'

    const formList = ["name", 'email', 'message'];

    for (let i = 0; i < formList.length; i++){
        const eleContainer = document.createElement('div')
        eleContainer.classList.add('child')
        eleContainer.style.cssText = "display: flex; flex-direction: column; gap: 2px;"

        let inputType = 'input';

        if (formList[i] == 'message'){
            inputType = 'textarea';
        }
    
        const label = document.createElement('label')
        label.textContent = `${(formList[i][0].toUpperCase()) + (formList[i].slice(1))}:`
    
        const field = document.createElement(inputType)
        field.name = `${formList[i]}`
        field.style.cssText = "min-width: 500px"
    
    
        eleContainer.append(label, field)
        form.append(eleContainer)
    }

    const submit = document.createElement('button');
    submit.type = "submit";
    submit.textContent = "Send";
    submit.style.cssText = "width: 100px;"

    
    form.append(submit)
    container.appendChild(form)
}