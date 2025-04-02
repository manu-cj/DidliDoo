import { AddEvent } from './components/form/AddEvent';
import { Header } from './components/Header'
import { Modal } from './components/Modal';
import './style.css'

Header();

const addEventButton = document.querySelector('.header__add-event');
addEventButton.addEventListener('click', () => {
  Modal('Add Event', 'add-event');
  AddEvent();
})

