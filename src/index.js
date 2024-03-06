import "./style.css";

import { contactPage } from "./contact";
import { homePage } from "./home";
import { menuPage } from "./menu";

(function() {
    homePage();
    (function() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                switch (button.textContent) {
                    case 'Home':
                        homePage();
                        break;

                    case 'Menu':
                        menuPage()
                        break;
                    
                    case 'Contact':
                        contactPage()
                        break;
                }
            })
        })
    })()
})()