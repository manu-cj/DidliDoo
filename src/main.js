import './style.css'
import fetchEvent from "./lib/fetchEvent.js"
import CardAllEvent from './components/cardAllEvent.js';


const app = document.querySelector('#app');
const main = document.createElement('main');
app.appendChild(main);


await fetchEvent(`api/events/`);
const events = await fetchEvent(`api/events/`);

events.forEach(event => {
    CardAllEvent(event)
});