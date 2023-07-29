import header from './pages/header.js'
import home from './pages/home.js'
import menu from './pages/menu.js'
import contact from './pages/contact.js'

const content = document.querySelector('.content');
console.log('connected');

content.appendChild(header());
content.appendChild(home());