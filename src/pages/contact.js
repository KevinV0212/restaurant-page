export default function contact() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = ('Contact');
    mainContent.append(title);

    // creating form to contact website (form is not actually active);
    const form = document.createElement('form');

    const formSubject = document.createElement('div');
    formSubject.classList = 'form-section';

    const subjectLabel = '<label for="subject"> Subject </label>'
    const subjectInput = '<input type="text" id="subject" name="subject" placeholder="subject"></input>' 
    formSubject.innerHTML = (
        `${subjectLabel}${subjectInput}`
    )
    form.appendChild(formSubject);
    
    const formDesc = document.createElement('div');
    formDesc.classList = 'form-section';

    const descLabel = '<label for="desc-content"> Description </label>'
    const descContent = '<textarea id="desc-content" name="desc-content" placeholder="Enter Description here"></textarea>';
    formDesc.innerHTML = (
        `${descLabel}${descContent}`
    );
    form.appendChild(formDesc);

    // const form = document.createElement('div');
    // const 
    // formText.classList = 'form-section';
    
    mainContent.appendChild(form);
    return mainContent;
}