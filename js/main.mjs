import { headerFooter } from "./headerFooter.mjs"
import { getCountry, getHistory } from './api.mjs';
import { renderCountry, renderHistory } from './render.mjs';
import { renderTimeline } from './timeline.mjs';
import { saveToLocalStorage, getFromLocalStorage } from './storage.mjs';

headerFooter();

async function init() {
    renderTimeline();

    let country = getFromLocalStorage('country');
    let history = getFromLocalStorage('history');

    if (!country) {
        country = await getCountry();
        saveToLocalStorage('country', country);
    }
    if (!history) {
        history = await getHistory();
        saveToLocalStorage('history', history);
    }

    renderCountry(country);
    renderHistory(history);
}

// favorite toggle
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('favorite-btn')) {
        const id = String(e.target.dataset.id);
        let favs = getFromLocalStorage('favs') || [];

        if (favs.includes(id)) {
            favs = favs.filter(f => f !== id);
            e.target.classList.remove('saved');
        } else {
            favs.push(id);
            e.target.classList.add('saved');
        }
        saveToLocalStorage('favs', favs);
    }
});

init();