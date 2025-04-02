export const UpdateEvent = (event) => {
    const modalBody = document.querySelector('.modal-body');
    const form = document.createElement('form');
    form.classList.add('add-event-form');
    form.innerHTML = `
        <label for="event-name">Event Name:</label>
        <input type="text" id="event-name" name="event-name" value="${event.name}" required>

        <label for="Author">Author :</label>
        <input type="text" id="author" name="author" value="${event.author}" required>

        <textarea id="event-description" name="event-description" rows="4" cols="50" placeholder="Event Description">${event.description}</textarea>
        
        <label for="event-dates">Event Dates:</label>
        <div id="event-dates">
            ${event.dates.map(date => `
                <div class="event-date-item">
                    <input type="date" name="event-dates[]" value="${date}" required>
                    <button type="button" class="remove-date">Remove</button>
                </div>
            `).join('')}
        </div>
        <button type="button" id="add-date">Add Date</button>
        
        <label for="event-location">Event Location:</label>
        <input type="text" id="event-location" name="event-location" value="${event.location}" required>
        
        <input type="submit" value="Update"></input>
    `;

    // Add event listener for adding new date fields
    const addDateButton = form.querySelector('#add-date');
    addDateButton.addEventListener('click', () => {
        const datesContainer = form.querySelector('#event-dates');
        const newDateField = document.createElement('div');
        newDateField.classList.add('event-date-item');
        newDateField.innerHTML = `
            <input type="date" name="event-dates[]" required>
            <button type="button" class="remove-date">Remove</button>
        `;
        datesContainer.appendChild(newDateField);

        // Add event listener for removing the date field
        newDateField.querySelector('.remove-date').addEventListener('click', () => {
            newDateField.remove();
        });
    });

    // Add event listeners for removing existing date fields
    form.querySelectorAll('.remove-date').forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.closest('.event-date-item').remove();
        });
    });
    modalBody.appendChild(form);
}