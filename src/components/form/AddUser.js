import { postAndPatchData } from "../../lib/postAndPatchData";
import { Modal } from "../Modal";
import fetchEvent from "../../lib/fetchEvent.js"
import CardAllEvent from "../cardAllEvent";


export default function AddUser(id,dates) {
    const modalBody = document.querySelector('.modal-body');
    if (!modalBody) {
        console.error('Modal body not found');
        return;
    } 

    const form = document.createElement('form');
    form.className = "addUserForm";
    form.innerHTML =`
    <label for="Name User">Name User</label>
    <input type="text" id="addUser" name="addUser" required>
    ` //+1 id 

    const datesDiv = document.createElement('div');
    datesDiv.className = "datesDiv";

    form.appendChild(datesDiv);


    dates.forEach(date => {
        const addUserInput = document.createElement('input');
        const addUserLabel = document.createElement('label');
        addUserInput.className = "addUserInput";  //+1
        addUserLabel.className = "addUserLabel";
        addUserLabel.textContent = date.date;  //+1
        addUserInput.type = "checkbox";
        addUserInput.name = "Add User"

        datesDiv.appendChild(addUserLabel);
        datesDiv.appendChild(addUserInput);    
    });

    
    const button = document.createElement('input');
    button.type = 'submit';
    button.className = "buttonAdd";
    button.textContent = 'Add';
    form.appendChild(button);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#addUser').value;
    const selectedDates = [];
    const dateCheckboxes = document.querySelectorAll('.addUserInput');
    const label = document.querySelectorAll('.addUserLabel');


    for (let i = 0; i < label.length; i++ ) {
        selectedDates.push({date:label[i].textContent,available:dateCheckboxes[i].checked})
    }
    const data = {name:name,dates:selectedDates}
    postAndPatchData(`http://localhost:3000/api/events/${id}/attend`,"POST",data).then(() => {
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
}
