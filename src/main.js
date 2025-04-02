import { AddEvent } from './components/form/AddEvent';
import { Header } from './components/Header'
import { Modal } from './components/Modal';
import './style.css'
import fetchEvent from "./lib/fetchEvent.js"
import CardAllEvent from './components/cardAllEvent.js';


const app = document.querySelector('#app');
const main = document.createElement('main');
app.appendChild(main);


await fetchEvent(`api/events/`);
const events = await fetchEvent(`api/events/`);

events.forEach(event => {
    CardAllEvent(event)
});

Header();

const addEventButton = document.querySelector('.header__add-event');
addEventButton.addEventListener('click', () => {
  Modal('Add Event', 'add-event');
  AddEvent();
})

