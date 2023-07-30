import header from './pages/header.js'
import { assignRender } from './pages/header.js'

import home from './pages/home.js'
import menu from './pages/menu.js'
import contact from './pages/contact.js'

console.log('connected');

const content = document.querySelector('.content');
content.appendChild(header());
// assigning each page to a nav button
assignRender('home-btn',  home)
assignRender('menu-btn', menu);
assignRender('contact-btn', contact);
content.appendChild(home());

