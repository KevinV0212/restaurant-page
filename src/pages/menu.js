import Steve from '../img/steve.jpg';
import Donna from '../img/donna.jpg';
import Marco from '../img/marco.jpg';

// factory function for a menuItem
const menuItem = (name, imgSrc, desc, price) => {
    const photo = new Image();
    photo.src = imgSrc;
    return {name, photo, desc, price}
}

export default function menu() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = ('Menu');
    mainContent.append(title);

    // manually adding menu items
    const items = [
        menuItem(
            'The Steve', Steve,

            'Sourced from the finest surburb in Wisconsin, the Steve ' +
            'is a well aged cut that loved playing golf on the weekends ' +
            'It is served with your choice of fries or onion rings',

            '$777'
        ),
        menuItem(
            'The Donna', Donna,

            'Sourced from the lovely town of New Orleans, ' + 
            'the Donna is fried with a light and crispy beer batter' +
            'with a side of tartar sauce. Its happy, family-oriented ' +
            'flavor makes it a fan favorite',

            '$1234'
        ),
        menuItem(
            'The Marco', Marco,

            'Sourced from the warm region of Southern texas, ' + 
            'the Marco is smoked low and slow over a bed of hickory wood chips'+
            'and is served on a potato bun.' + 
            'Having gone to countless Mavericks games, the Marco truly '+
            'embodies that classic Texas flavor',

            '$1337'
        ),
    ]
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // render each item object
    items.forEach(item => {
        const entry = document.createElement('div');
        const name = document.createElement('h2');
        const desc = document.createElement('p');
        const price = document.createElement('p');
    
        entry.classList.add('menu-item');
        name.classList.add('item-name');
        desc.classList.add('item-desc');
        price.classList.add('item-price');
        
        name.textContent = item.name;
        desc.textContent = item.desc;
        price.textContent = item.price;

        entry.appendChild(name);
        entry.appendChild(item.photo)
        entry.appendChild(desc);
        entry.appendChild(price);
    
        menu.appendChild(entry)
    })

    mainContent.appendChild(menu);
    
    return mainContent;
}