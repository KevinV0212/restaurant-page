export default function contact() {
    const container = document.createElement('div');
    container.classList.add('container');

    // creation of main content area
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const text = document.createElement('p');
    text.textContent = 'contact';
    mainContent.appendChild(text);
    container.appendChild(mainContent);

    return container;
}