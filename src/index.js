import header from './pages/header.js'
import { assignRender } from './pages/header.js'

import home from './pages/home.js'
import menu from './pages/menu.js'
import contact from './pages/contact.js'

import './style.css';
import '../node_modules/@mdi/font/css/materialdesignicons.css'
console.log('connected');

const content = document.querySelector('.content');
content.appendChild(header());

// assigning each page to a nav button
assignRender('home-btn',  home)
assignRender('menu-btn', menu);
assignRender('contact-btn', contact);

content.appendChild(menu());

