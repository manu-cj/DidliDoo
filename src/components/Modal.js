export const Modal = (title, type) => {
    const app = document.querySelector('#app');
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = title;
    modalHeader.appendChild(modalTitle);

    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');
   
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modal.appendChild(modalContent);
    app.appendChild(modal);

    
}