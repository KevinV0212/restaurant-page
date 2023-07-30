export default function header() {
    // render header section
    const header = document.createElement('div');
    header.classList.add('header');
    
    // navbar
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    // creating buttons for nav bar
    const homeBtn = document.createElement('button');
    homeBtn.setAttribute('id', 'home-btn');
    homeBtn.classList.add('nav-btn');
    homeBtn.textContent = 'Home';
    navBar.appendChild(homeBtn);
    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('id', 'menu-btn');
    menuBtn.classList.add('nav-btn');
    menuBtn.textContent = 'Menu';
    navBar.appendChild(menuBtn);
    const contactBtn = document.createElement('button');
    contactBtn.setAttribute('id', 'contact-btn');
    contactBtn.classList.add('nav-btn');
    contactBtn.textContent = 'Contact';
    navBar.appendChild(contactBtn);
   
    header.appendChild(navBar);
    return header;
}

// function that will set give button with 'id' the class of 'current'
// will also remove 'current' from all other nav buttons'
export function setCurrentNavBtn(id)
{
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => btn.classList.remove('current)'));
    const currentBtn = document.querySelector(`#${id}`);
    currentBtn.classList.add('current');
}

// function that assigns button with 'id' to call 'page' to render a page
export function assignRender(id, page){
    const content = document.querySelector('.content');
    const btn = document.querySelector(`#${id}`);
    btn.addEventListener('click', () => {
        const mainContent = document.querySelector('.main-content');
        if (mainContent) content.removeChild(mainContent);
        content.appendChild(page());
    });
}