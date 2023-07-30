export default function contact() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = ('Contact');
    mainContent.append(title);


    return mainContent;
}