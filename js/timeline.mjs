import { getFromLocalStorage } from './storage.mjs';

const events = [
  { id: 1, year: "1880", title: "Foundation of Brazzaville" },
  { id: 2, year: "1910", title: "Capital of French Equatorial Africa (AEF)" },
  { id: 3, year: "1960", title: "Independence - August 15" },
  { id: 4, year: "1969", title: "People's Republic of Congo" },
  { id: 5, year: "1991", title: "National Sovereign Conference" },
  { id: 6, year: "1992", title: "New Constitution & Multi-party" }
];

export function renderTimeline() {
    const container = document.querySelector('.timeline-list');
    if (!container) return;
    const favs = (getFromLocalStorage('favs') || []).map(String);
    container.innerHTML = events.map(ev => {
        const isSaved = favs.includes(String(ev.id));
        return `<div class="timeline-item">
            <div><strong>${ev.year}:</strong> ${ev.title}</div>
            <button data-id='${ev.id}' class='favorite-btn ${isSaved?'saved':''}'>${isSaved?'❤ Saved':'⭐ Save'}</button>
        </div>`
    }).join('');
}
export function getEvents() { return events; }