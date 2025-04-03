import fetchEvent from "../../lib/fetchEvent";
import { postAndPatchData } from "../../lib/postAndPatchData";
import CardAllEvent from "../cardAllEvent";

export const DeleteEvent = async (id, name) => {
    const modalBody = document.querySelector(".modal-body");
    
    // Clear previous content in the modal body
    modalBody.innerHTML = "";
    
    // Create the form element
    const form = document.createElement("form");
    form.classList.add("delete-event-form");
    form.innerHTML = `
    <div style="display:flex; flex-direction:row; gap:10px; align-items:center;">
        <p>Are you sure you want to delete the event "${name}"? </p>
        <input type="submit" value="Yes">
    </div>
    `;
    
    // Add submit event listener
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
    
        // Send DELETE request to delete the event
        const response = await postAndPatchData(`http://localhost:3000/api/events/${id}`, "DELETE");
    
        console.log("Event deleted successfully:", response);
    
        if (response.status === 200) {
        const events = await fetchEvent("api/events");
        const main = document.querySelector("main");
        main.innerHTML = ""; 
        events.forEach((event) => {
            CardAllEvent(event);
        });
        }
    });
    
    modalBody.appendChild(form);
}