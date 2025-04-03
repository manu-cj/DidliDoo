import fetchEvent from "../../lib/fetchEvent";
import CardAllEvent from "../cardAllEvent";
import { postAndPatchData } from "../../lib/postAndPatchData.js";
import { LogIn } from "lucide-static";
import { Notifications } from "../Notifications.js";

export const UpdateEvent = (event) => {
  const modalBody = document.querySelector(".modal-body");

  // Clear previous content in the modal body
  modalBody.innerHTML = "";

  // Create the form element
  const form = document.createElement("form");
  form.classList.add("update-event-form");
  form.innerHTML = `
    <label for="event-name">Event Name:</label>
    <input type="text" id="event-name" name="event-name" value="${event.name}" required>

    <label for="author">Author:</label>
    <input type="text" id="author" name="author" value="${event.author}" required>

    <label for="event-description">Event Description:</label>
    <textarea id="event-description" name="event-description" rows="4" cols="50" placeholder="Event Description" required>${event.description}</textarea>
    
    <input type="submit" value="Update">
  `;

  // Add submit event listener
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Extract form values
    const name = form.querySelector("#event-name").value.trim();
    const author = form.querySelector("#author").value.trim();
    const description = form.querySelector("#event-description").value.trim();

    // Validate form inputs
    if (!name || !author || !description) {
      alert("All fields are required.");
      return;
    }

    
      // Send PATCH request to update the event
      const response = await postAndPatchData(`http://localhost:3000/api/events/${event.id}`, "PATCH", {
        naqme,
        author,
        description,
      });

      // Parse the response
      
      console.log("Event updated successfully:", response);
      // Notifications(response.status);

      if (response.status === 200) {
      const events = await fetchEvent("api/events");
      const main = document.querySelector("main");
      main.innerHTML = ""; 
      events.forEach((event) => {
        CardAllEvent(event);
      });
      

      console.log("Event updated successfully!");
      const modal = document.querySelector('.modal');
      modal.remove();
      }
      
  });

  // Append the form to the modal body
  modalBody.appendChild(form);
};
