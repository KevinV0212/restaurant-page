import Food from '../img/logo.png';
import { setCurrentNavBtn } from './header';

export default function home() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    setCurrentNavBtn('home-btn');
    
    const foodImg = new Image();
    foodImg.src = Food; 
    mainContent.appendChild(foodImg);
    
    // setting text content
    const info = document.createElement('div');
    info.classList.add('info');

    const summary = document.createElement('p');
    summary.textContent = 
        'Founded in 1996, Murder King started as a local '+
        'franchise of the popular fast food chain B****r K**g. '+
        'Ever since then, Murder King has become an local hotspot '+
        'which has nothing to do with the with the increasing number of '+
        'disappearances in the area';
    info.appendChild(summary);
    
    const schedule = document.createElement('div');
    schedule.classList.add('schedule');
    schedule.textContent = 'Every day from 1am to 4am';
    info.appendChild(schedule);

    mainContent.appendChild(info);

    return mainContent;
}