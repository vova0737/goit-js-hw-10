import './styles.css';
import menu from './menu.json';
import cards from './card.hbs';

const menuContainer = document.querySelector(".js-menu");
const cardsMarkup = createMenuMarkup(menu);

menuContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createMenuMarkup(menu) {
    return cards(menu);
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const switchToggle = document.querySelector('#theme-switch-toggle');
const bodyElement = document.querySelector('body');

switchToggle.addEventListener('change', onSwitch);

bodyElement.setAttribute('class', localStorage.getItem('Theme'));

if (localStorage.getItem('Theme') === Theme.DARK) {
    switchToggle.checked = true;
}

function onSwitch(event) {
    if (event.target.checked) {
        bodyElement.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('Theme', Theme.DARK);
    } else {
        bodyElement.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('Theme', Theme.LIGHT);
    }
}