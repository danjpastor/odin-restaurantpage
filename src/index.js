import "./style.css";

import { homePage } from "./home";

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
                }
            })
        })
    })()
})()