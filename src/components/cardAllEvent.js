import { Pencil, Trash2 } from 'lucide-static';
import fetchEvent from '../lib/fetchEvent';
import { Modal } from './Modal';
import { UpdateEvent } from './form/UpdateEvent';

export default async function CardAllEvent(event) {
const main = document.querySelector('main');
const cards = document.createElement('article');
cards.className = "cards";

const articleHeader = document.createElement('div')
articleHeader.className = "articleHeader";

const controlDiv = document.createElement('div');
controlDiv.className = "controlDiv";
articleHeader.appendChild(controlDiv);

const updateIcon = document.createElement('i');
updateIcon.innerHTML = Pencil;

const deleteIcon = document.createElement('i');
deleteIcon.innerHTML = Trash2;

controlDiv.appendChild(updateIcon);
controlDiv.appendChild(deleteIcon);

const eventTitle = document.createElement('h3');
eventTitle.className = "eventTitle";
eventTitle.textContent = event.name;
articleHeader.appendChild(eventTitle);

const eventDate = document.createElement('p');
eventDate.className = "eventDate";
eventDate.textContent = event.created_at;
articleHeader.appendChild(eventDate);

const eventAuthor = document.createElement('p');
eventAuthor.className = "eventAuthor";
eventAuthor.textContent = event.author;
articleHeader.appendChild(eventAuthor);


const articleBody = document.createElement('div');
articleBody.className = "articleBody";

const eventDescription = document.createElement('p');
eventDescription.className = "eventDescription";
eventDescription.textContent = event.description;
articleBody.appendChild(eventDescription);

const attendees = await fetchEvent(`api/attendees/`);

const attendeeDiv = document.createElement('div')
attendeeDiv.className = "attendeeDiv";
articleBody.appendChild(attendeeDiv);


const resulatAttendeeP = [];//test tableau
const resultDateP = [];//test tableau
const comparaisonAttendeePDateP = [];//test tableau

console.log(resulatAttendeeP);
console.log(resultDateP);



attendees.forEach(attendee => {
    const attendeeEvents = attendee.events;
    attendeeEvents.forEach(attendeeEvent => {
        if (event.id === attendeeEvent.id) {
            const attendeeP = document.createElement('p');
            attendeeP.className ="attendeeDiv";
            attendeeP.textContent = attendee.name;
            attendeeDiv.appendChild(attendeeP);
            resulatAttendeeP.push(attendee);//test tableau
        }
    })
})


const dates = document.createElement('div')
dates.className = "dates";
articleBody.appendChild(dates);
const allDates = event.dates;
allDates.forEach(date => {
    const dateP = document.createElement('p');
    dateP.className = "date";
    dateP.textContent = date.date;
    dates.appendChild(dateP);
    resultDateP.push(date);//test tableau
});



main.appendChild(cards);
cards.appendChild(articleHeader);
cards.appendChild(articleBody);


updateIcon.addEventListener('click', ()=> {
    Modal('Update Event', 'update-event');
    UpdateEvent(event);
})

}