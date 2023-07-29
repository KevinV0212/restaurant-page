import Food from '../img/logo.png';
import { setCurrentNavBtn } from './header';

export default function home() {
    const container = document.createElement('div');
    container.classList.add('container');


    setCurrentNavBtn('home-btn');
    // creation of home content area
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    
    const foodImg = new Image();
    foodImg.src = Food; 
    mainContent.appendChild(foodImg);
    
    const summary = document.createElement('p');
    summary.textContent = 
        'Founded in 1996, Murder King started as a local '+
        'franchise of the popular fast food chain B****r K**g. '+
        'Ever since then, Murder King has become an local hotspot '+
        'which has nothing to do with the with the increasing number of '+
        'disappearances in the local area';
    mainContent.appendChild(summary);
    
    const schedule = document.createElement('div');
    schedule.classList.add('schedule');
    schedule.textContent = 'Every day from 1am to 4am';
    mainContent.appendChild(schedule);

    container.appendChild(mainContent);

    return container;
}