import deleteEvent from "../../lib/deleteEvent";

export function DeleteEventModal(event, deleteIcon) {
  const app = document.querySelector("#app");
  const modal = document.querySelector(".modal");
  const modalBody = document.querySelector(".modal-body");
  const currentArticleCard = deleteIcon.parentNode.parentNode.parentElement;

  if (!modalBody) {
    console.error("Element with class 'modal-body' not found!");
    return;
  }

  const modalDelete = document.createElement("div");
  modalDelete.className = "delete-modal";
  modalDelete.innerHTML = `
    <div class="delete-modal-content">
        <p>Are you sure you want to delete the event: <strong>${event.name}</strong>?</p>
        <div class="delete-confirmation" style="margin: 20px 0;">
            <button id="confirm-delete">Yes</button>
            <button id="cancel-delete">No</button>
        </div>
    </div>
  `;

  modalBody.appendChild(modalDelete);

  document
    .getElementById("confirm-delete")
    .addEventListener("click", async () => {
      try {
        if (deleteEvent(event.id)) {
          currentArticleCard.remove();
        }
      } catch (error) {
        console.error("Error deleting event:", error);
      } finally {
        app.removeChild(modal);
      }
    });

  document
    .getElementById("cancel-delete")
    .addEventListener("click", async () => {
      app.removeChild(modal);
    });
}
