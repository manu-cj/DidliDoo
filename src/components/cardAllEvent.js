import { Pencil, Trash2, User2, UserPlus } from 'lucide-static';
import fetchEvent from '../lib/fetchEvent';
import { Modal } from './Modal';
import { UpdateEvent } from './form/UpdateEvent';
import { DeleteEventModal } from './form/DeleteEventModal';
import AddUser from './form/AddUser';
import { DeleteEvent } from './form/DeleteEvent';

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
updateIcon.className ="updateIcon";
updateIcon.innerHTML = Pencil;

const deleteIcon = document.createElement('i');
deleteIcon.innerHTML = Trash2;
deleteIcon.className ="deleteIcon";

const addUserIcon = document.createElement('i');
addUserIcon.className ="addUserIcon";
addUserIcon.innerHTML = UserPlus;

controlDiv.appendChild(addUserIcon);
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

// console.log(resulatAttendeeP);//[0].event[0].dates
// console.log(resultDateP); //date.date



attendees.forEach(attendee => {
    const attendeeEvents = attendee.events;
    attendeeEvents.forEach(attendeeEvent => {
        if (event.id === attendeeEvent.id) {
            const attendeeP = document.createElement('p');
            attendeeP.className ="attendeeDiv";
            // attendeeP.textContent = attendee.name;
            attendeeDiv.appendChild(attendeeP);
            resulatAttendeeP.push(attendee.name);//test tableau
        }
    })
})


const dates = document.createElement('div')
dates.className = "dates";
articleBody.appendChild(dates);
const allDates = event.dates;
allDates.forEach(date => {
    const divDateP = document.createElement('div');
    divDateP.classList = "divDateP";
   

    const dateP = document.createElement('p');
    dateP.className = "date";
    dateP.textContent = date.date;
    dates.appendChild(divDateP);
    divDateP.appendChild(dateP);
    // resultDateP.push(date.date);//test tableau


    date.attendees.forEach(participant => {
    console.log(participant);
    if ( participant.available === true){
        const checkGreen = document.createElement('div');
        checkGreen.className = "checkGreen";
        dateP.appendChild(checkGreen);
        checkGreen.innerText = participant.name;

    } else {
        const checkRed = document.createElement('div');
        checkRed.className = "checkRed";
        dateP.appendChild(checkRed);
        checkRed.innerText = participant.name;
    }
    
    })
});

// const a = event;
// a.forEach(element => {

// })



// const maxLength = Math.max(resulatAttendeeP.length, resultDateP.length);

// for (let index = 0; index < maxLength; index++) {
//     const attendee = resulatAttendeeP[index];
//     const date = resultDateP[index];

//     if (attendee === undefined) {
//         comparaisonAttendeePDateP.push(`Pas de participant à l'index ${index}`);
//     } else if (date === undefined) {
//         comparaisonAttendeePDateP.push(`Pas de date à l'index ${index}`);
//     } else {
//         comparaisonAttendeePDateP.push(`Participant: ${attendee}, Date: ${date}`);
//     }
// }

// console.log(comparaisonAttendeePDateP);



main.appendChild(cards);
cards.appendChild(articleHeader);
cards.appendChild(articleBody);


updateIcon.addEventListener('click', ()=> {
    Modal('Update Event', 'update-event');
    UpdateEvent(event);
})

deleteIcon.addEventListener('click', () => {
    Modal('Delete Event', 'delete-event');
    DeleteEvent(event.id, event.name);
})


addUserIcon.addEventListener('click', ()=> {
    Modal('Add User', 'Add User');
    AddUser(event.id,event.dates);

})

deleteIcon.addEventListener("click", () => {
    Modal("Delete Event", "delete-event");
    DeleteEventModal(event, deleteIcon);
});
}