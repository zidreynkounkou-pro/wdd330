import { getFromLocalStorage, saveToLocalStorage } from './storage.mjs';
import { getEvents } from './timeline.mjs';
import { headerFooter } from './headerFooter.mjs';

headerFooter();

function renderFavorites() {
    const container = document.querySelector('.favorites-list');
    const countEl = document.querySelector('#fav-count');
    const favs = getFromLocalStorage('favs') || [];
    const events = getEvents();

    const favoriteEvents = events.filter(ev => favs.includes(String(ev.id)));

    if (countEl) countEl.textContent = favoriteEvents.length;

    if (favoriteEvents.length === 0) {
        container.innerHTML = `
            <div class="empty">
                <h2>No favorites yet</h2>
                <a href="../index.html">← Back to Home</a>
            </div>`;
        return;
    }

    container.innerHTML = favoriteEvents.map(ev => `
        <div class="timeline-item">
            <span><strong>${ev.year}:</strong> ${ev.title}</span>
            <button data-id="${ev.id}" class="favorite-btn saved">Remove</button>
        </div>
    `).join('');
}

renderFavorites();

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('favorite-btn')) {
        let favs = getFromLocalStorage('favs') || [];
        favs = favs.filter(f => String(f) !== String(e.target.dataset.id));
        saveToLocalStorage('favs', favs);
        renderFavorites();
    }
});