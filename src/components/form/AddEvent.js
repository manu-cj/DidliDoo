export const AddEvent = () => {
    const modalBody = document.querySelector('.modal-body');
    const form = document.createElement('form');
    form.classList.add('add-event-form');
    form.innerHTML = `
        <label for="event-name">Event Name:</label>
        <input type="text" id="event-name" name="event-name" required>

        <textarea id="event-description" name="event-description" rows="4" cols="50" placeholder="Event Description"></textarea>
        
        <label for="event-date">Event Date:</label>
        <input type="date" id="event-date" name="event-date" required>
        
        <label for="event-time">Event Time:</label>
        <input type="time" id="event-time" name="event-time" required>
        
        <label for="event-location">Event Location:</label>
        <input type="text" id="event-location" name="event-location" required>
        
        <input type="submit" value="add"></input>
    `;
    modalBody.appendChild(form);
}
