import { Modal } from "../Modal";

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
    `

    const datesDiv = document.createElement('div');
    datesDiv.className = "datesDiv";

    form.appendChild(datesDiv);


    dates.forEach(date => {
        const addUserInput = document.createElement('input');
        const addUserLabel = document.createElement('label');
        addUserInput.className = "addUserInput";
        addUserLabel.className = "addUserLabel";
        addUserLabel.textContent = date.date;
        addUserInput.type = "checkbox";
        addUserInput.name = "Add User"
        addUserInput.required = true;

        datesDiv.appendChild(addUserLabel);
        datesDiv.appendChild(addUserInput);    
    })
    modalBody.appendChild(form);
}