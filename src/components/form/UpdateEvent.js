import fetchEvent from "../../lib/fetchEvent";
import CardAllEvent from "../cardAllEvent";

export const UpdateEvent = (event) => {
    const modalBody = document.querySelector(".modal-body");
    const form = document.createElement("form");
    form.classList.add("update-event-form");
    form.innerHTML = `
                <label for="event-name">Event Name:</label>
                <input type="text" id="event-name" name="event-name" value="${event.name}" required>

                <label for="Author">Author :</label>
                <input type="text" id="author" name="author" value="${event.author}" required>

                <textarea id="event-description" name="event-description" rows="4" cols="50" placeholder="Event Description">${event.description}</textarea>
                
                <label for="event-location">Event Location:</label>
                <input type="text" id="event-location" name="event-location" value="${event.location}" required>
                
                <input type="submit" value="Update"></input>
        `;

    modalBody.appendChild(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.querySelector("#event-name").value;
        const author = form.querySelector("#author").value;
        const description = form.querySelector("#event-description").value;

        postAndPatchData(`http://localhost:3000/api/events/${event.id}`, "PATCH", {
            name,
            author,
            description,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(() => {
                console.log("Event updated successfully");
                fetchEvent("api/events").then((events) => {
                    const app = document.querySelector("#app");
                    app.innerHTML = ""; 
                    events.forEach((event) => {
                        CardAllEvent(event);
                    });
                });
            })
            .catch((error) => console.error("Error updating event:", error));
    });
};
