export default async function CardAllEvent(event) {
const main = document.querySelector('main');
const cards = document.createElement('article');
cards.className = "cards";

const articleHeader = document.createElement('div')
articleHeader.className = "articleHeader";

const eventTitle = document.createElement('h3');
eventTitle.className = "eventTitle";
eventTitle.textContent = event.name;
articleHeader.appendChild(eventTitle);

const eventDate = document.createElement('p');
eventDate.className = "eventDate";
eventDate.textContent = event.created_at;
articleHeader.appendChild(eventDate);

const eventAuthor = document.createElement('p');
eventAuthor.className = "eventAuthor";
eventAuthor.textContent = event.author;
articleHeader.appendChild(eventAuthor);


const articleBody = document.createElement('div');
articleBody.className = "articleBody";

const eventDescription = document.createElement('p');
eventDescription.className = "eventDescription";
eventDescription.textContent = event.description;
articleBody.appendChild(eventDescription);

const allDates = event.dates;
allDates.forEach(date => {
    const dateP = document.createElement('p');
    dateP.className = "date";
    dateP.textContent = date.date;
    articleBody.appendChild(dateP);
});


main.appendChild(cards);
cards.appendChild(articleHeader);
cards.appendChild(articleBody);

}