export const Header = () => {
    const app = document.querySelector('#app');
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.textContent = 'DidliDoo';
    title.classList.add('header__title');
    title.addEventListener('click', () => {
        window.location.href = '/';
    });
    header.appendChild(title);

    const addEvent = document.createElement('button');
    addEvent.textContent = 'Add Event';
    addEvent.classList.add('header__add-event');

    header.appendChild(addEvent);
    
    app.appendChild(header);
}