import menuItems from './templates/menu.hbs';
import menu from './menu.json';

const menuMarkup = document.querySelector('.js-menu');

const checkboxEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');


const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KAY = 'theme';

// разметка
const markup = menuItems(menu);
menuMarkup.insertAdjacentHTML('beforeend', markup);


// смена темы
checkboxEl.addEventListener('change', changeCheckbox);
themeDark();

function changeCheckbox() {
  if (checkboxEl.checked) {
    bodyEl.classList.add(theme.DARK);
    bodyEl.classList.remove(theme.LIGHT);
    localStorage.setItem(STORAGE_KAY, theme.DARK);
  } else {
    bodyEl.classList.add(theme.LIGHT);
    bodyEl.classList.remove(theme.DARK);
    localStorage.setItem(STORAGE_KAY, theme.LIGHT);
    }
}


function themeDark() {
    if (localStorage.getItem(STORAGE_KAY) === theme.DARK) {
    bodyEl.classList.add(theme.DARK);
    checkboxEl.checked = true;
    }
}