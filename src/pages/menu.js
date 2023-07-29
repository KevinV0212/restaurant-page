export default function menu() {
    const container = document.createElement('div');
    container.classList.add('container');

    // render header section
    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('h1');
    title.textContent = 'Restaurant Name'
    title.classList.add('title');
    header.appendChild(title);
    container.appendChild(header);

    // creation of main content area
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    const foodImg = new Image();
    foodImg.src = Food; 
    mainContent.appendChild(foodImg);
    const text = document.createElement('p');
    text.textContent = 'Main Content Text';
    mainContent.appendChild(text);
    container.appendChild(mainContent);

    return container;
}