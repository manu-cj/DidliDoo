import { postAndPatchData } from "../../lib/postAndPatchData.js";
import fetchEvent from "../../lib/fetchEvent.js";
import CardAllEvent from "../cardAllEvent";

export const AddEvent = () => {
    const modalBody = document.querySelector('.modal-body');
    if (!modalBody) {
        console.error('Modal body not found');
        return;
    }

    const form = document.createElement('form');
    form.classList.add('add-event-form');
    form.innerHTML = `
        <label for="event-name">Event Name:</label>
        <input type="text" id="event-name" name="event-name" required>

        <label for="author">Author:</label>
        <input type="text" id="author" name="author" required>

        <label for="event-description">Event Description:</label>
        <textarea id="event-description" name="event-description" rows="4" cols="50" placeholder="Event Description"></textarea>
        
        <div id="event-dates-container">
            <label for="event-date-1">Event Date:</label>
            <input type="date" id="event-date-1" name="event-date" required>
        </div>
        <button type="button" id="add-date-button">Add Another Date</button>

        <input type="submit" value="Add">
    `;

    const addDateButton = form.querySelector('#add-date-button');
    const eventDatesContainer = form.querySelector('#event-dates-container');
    let dateCount = 1;

    addDateButton.addEventListener('click', () => {
        dateCount++;
        const newDateInput = document.createElement('div');
        newDateInput.innerHTML = `
            <label for="event-date-${dateCount}">Event Date:</label>
            <input type="date" id="event-date-${dateCount}" name="event-date" required>
        `;
        eventDatesContainer.appendChild(newDateInput);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('#event-name').value;
        const author = form.querySelector('#author').value;
        const description = form.querySelector('#event-description').value;
        const dates = Array.from(form.querySelectorAll('input[name="event-date"]')).map(input => input.value);

        postAndPatchData('http://localhost:3000/api/events', 'POST', {
            name,
            dates,
            author,
            description,
        }).then(() => {
            console.log('Event added successfully');
            fetchEvent('api/events').then((events) => {
             ;
                const main = document.querySelector('main');
                main.innerHTML = '';
                events.forEach(event => {
                    CardAllEvent(event); 
                });
            }
            ).catch((error) => {
                console.error('Error fetching events:', error);
            });
            
        }).catch((error) => {
            console.error('Error adding event:', error);
        });

        const modal = document.querySelector('.modal');
        modal.remove();
    });

    modalBody.appendChild(form);
};
