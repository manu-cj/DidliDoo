import { Pencil, Trash2, User2, UserPlus } from 'lucide-static';
import fetchEvent from '../lib/fetchEvent';
import { Modal } from './Modal';
import { UpdateEvent } from './form/UpdateEvent';
import { DeleteEventModal } from './form/DeleteEventModal';
import AddUser from './form/AddUser';

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
eventDate.textContent = new Date(event.last_modification) > new Date(event.created_at) 
    ? `Last modified: ${new Date(event.last_modification).toLocaleString()}` 
    : `Created at: ${new Date(event.created_at).toLocaleString()}`;
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


const resulatAttendeeP = [];


attendees.forEach(attendee => {
    const attendeeEvents = attendee.events;
    attendeeEvents.forEach(attendeeEvent => {
        if (event.id === attendeeEvent.id) {
            const attendeeP = document.createElement('p');
            attendeeP.className ="attendeeDiv";

            attendeeDiv.appendChild(attendeeP);
            resulatAttendeeP.push(attendee.name);
        }
    })
})


const dates = document.createElement('div')
dates.className = "dates";
articleBody.appendChild(dates);
const allDates = event.dates;
const bestDate = [];
allDates.forEach(date => {
    const divDateP = document.createElement('div');
    divDateP.classList = "divDateP";
   let count = 0;

    const dateP = document.createElement('p');
    dateP.className = "date";
    dateP.textContent = date.date;
    dates.appendChild(divDateP);
    divDateP.appendChild(dateP);
   

  

    date.attendees.forEach(participant => {
    if ( participant.available === true){
        const checkGreen = document.createElement('div');
        checkGreen.className = "checkGreen";
        divDateP.appendChild(checkGreen);
        checkGreen.innerText = participant.name;
        count++;
        bestDate.push({ date: date.date, count: count });
        

    } else {
        const checkRed = document.createElement('div');
        checkRed.className = "checkRed";
        divDateP.appendChild(checkRed);
        checkRed.innerText = participant.name;
    }
    
    
    
    })
});
if (bestDate.length > 0) {
    const maxCount = Math.max(...bestDate.map(d => d.count));
    const bestDates = bestDate.filter(d => d.count === maxCount);

    bestDates.forEach(best => {
        const dateElements = dates.querySelectorAll('.date');
        dateElements.forEach(dateElement => {
            if (dateElement.textContent.includes(best.date)) {
                dateElement.style.boxShadow = '0 0 15px 5px rgba(20, 165, 20, 0.47)';
                // dateElement.style.border = '1px solid green';
                dateElement.style.borderRadius = '60px';
            }
        });
    });
}
console.log(bestDate);


main.appendChild(cards);
cards.appendChild(articleHeader);
cards.appendChild(articleBody);


updateIcon.addEventListener('click', ()=> {
    Modal('Update Event', 'update-event');
    UpdateEvent(event);
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