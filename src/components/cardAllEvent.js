import { Pencil, Trash2, User2, UserPlus } from 'lucide-static';
import fetchEvent from '../lib/fetchEvent';
import { Modal } from './Modal';
import { UpdateEvent } from './form/UpdateEvent';
import { DeleteEventModal } from './form/DeleteEventModal';
import AddUser from './form/AddUser';

// Fonction asynchrone pour créer une carte d'événement
export default async function CardAllEvent(event) {
    // Sélectionner l'élément principal du DOM
    const main = document.querySelector('main');

    // Créer un conteneur pour les cartes d'événements
    const cards = document.createElement('article');
    cards.className = "cards";

    // Créer l'en-tête de l'article
    const articleHeader = document.createElement('div');
    articleHeader.className = "articleHeader";

    // Créer une div pour les contrôles (icônes d'actions)
    const controlDiv = document.createElement('div');
    controlDiv.className = "controlDiv";
    articleHeader.appendChild(controlDiv);

    // Créer et configurer les icônes d'action
    const updateIcon = document.createElement('i');
    updateIcon.className = "updateIcon";
    updateIcon.innerHTML = Pencil;

    const deleteIcon = document.createElement('i');
    deleteIcon.innerHTML = Trash2;
    deleteIcon.className = "deleteIcon";

    const addUserIcon = document.createElement('i');
    addUserIcon.className = "addUserIcon";
    addUserIcon.innerHTML = UserPlus;

    // Ajouter les icônes à la div de contrôle
    controlDiv.appendChild(addUserIcon);
    controlDiv.appendChild(updateIcon);
    controlDiv.appendChild(deleteIcon);

    // Créer et configurer le titre de l'événement
    const eventTitle = document.createElement('h3');
    eventTitle.className = "eventTitle";
    eventTitle.textContent = event.name;
    articleHeader.appendChild(eventTitle);


    // Créer et configurer la date de l'événement
    const eventDate = document.createElement('p');
    eventDate.className = "eventDate";
    eventDate.textContent = new Date(event.last_modification) > new Date(event.created_at) 
        ? `Last modified: ${new Date(event.last_modification).toLocaleString()}` 
        : `Created at: ${new Date(event.created_at).toLocaleString()}`;
    articleHeader.appendChild(eventDate);


    // Créer et configurer l'auteur de l'événement
    const eventAuthor = document.createElement('p');
    eventAuthor.className = "eventAuthor";
    eventAuthor.textContent = event.author;
    articleHeader.appendChild(eventAuthor);

    // Créer le corps de l'article
    const articleBody = document.createElement('div');
    articleBody.className = "articleBody";

    // Créer et configurer la description de l'événement
    const eventDescription = document.createElement('p');
    eventDescription.className = "eventDescription";
    eventDescription.textContent = event.description;
    articleBody.appendChild(eventDescription);

    // Récupérer les participants à l'événement
    const attendees = await fetchEvent(`api/attendees/`);

    // Créer une div pour afficher les participants
    const attendeeDiv = document.createElement('div');
    attendeeDiv.className = "attendeeDiv";
    articleBody.appendChild(attendeeDiv);

    const resulatAttendeeP = [];

    // Parcourir les participants et les ajouter à la div
    attendees.forEach(attendee => {
        const attendeeEvents = attendee.events;
        attendeeEvents.forEach(attendeeEvent => {
            if (event.id === attendeeEvent.id) {
                const attendeeP = document.createElement('p');
                attendeeP.className = "attendeeDiv";
                attendeeDiv.appendChild(attendeeP);
                resulatAttendeeP.push(attendee.name);
            }
        });
    });

    // Créer une div pour afficher les dates
    const dates = document.createElement('div');
    dates.className = "dates";
    articleBody.appendChild(dates);

    const allDates = event.dates;
    const bestDate = [];

    // Parcourir les dates et les ajouter à la div
    allDates.forEach(date => {
        const divDateP = document.createElement('div');
        divDateP.classList = "divDateP";
        let count = 0;

        const dateP = document.createElement('p');
        dateP.className = "date";
        dateP.textContent = date.date;
        dates.appendChild(divDateP);
        divDateP.appendChild(dateP);

        // Parcourir les participants pour chaque date
        date.attendees.forEach(participant => {
            if (participant.available === true) {
                const checkGreen = document.createElement('div');
                checkGreen.className = "checkGreen";
                divDateP.appendChild(checkGreen);
                checkGreen.innerText = participant.name;
                count++;
                bestDate.push({ date: date.date, count: count });
            } else {
                const checkRed = document.createElement('div');
                checkRed.className = "checkRed";
                divDateP.appendChild(checkRed);
                checkRed.innerText = participant.name;
            }
        });
    });

    // Mettre en évidence la meilleure date
    if (bestDate.length > 0) {
        const maxCount = Math.max(...bestDate.map(d => d.count));
        const bestDates = bestDate.filter(d => d.count === maxCount);

        bestDates.forEach(best => {
            const dateElements = dates.querySelectorAll('.date');
            dateElements.forEach(dateElement => {
                if (dateElement.textContent.includes(best.date)) {
                    dateElement.style.boxShadow = '0 0 15px 5px rgba(20, 165, 20, 0.47)';
                    dateElement.style.borderRadius = '60px';
                }
            });
        });
    }

    console.log(bestDate);

    // Ajouter les éléments au DOM
    main.appendChild(cards);
    cards.appendChild(articleHeader);
    cards.appendChild(articleBody);

    // Ajouter des écouteurs d'événements aux icônes
    updateIcon.addEventListener('click', () => {
        Modal('Update Event', 'update-event');
        UpdateEvent(event);
    });

    addUserIcon.addEventListener('click', () => {
        Modal('Add User', 'Add User');
        AddUser(event.id, event.dates);
    });

    deleteIcon.addEventListener("click", () => {
        Modal("Delete Event", "delete-event");
        DeleteEventModal(event, deleteIcon);
    });
}
