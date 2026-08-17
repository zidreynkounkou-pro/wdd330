import { getFromLocalStorage } from './storage.mjs';
export function renderCountry(country) {
  const box = document.querySelector('.quick-facts');
  if (!box) return;
  const capital = Array.isArray(country.capital)? country.capital[0] : country.capital;
  const flag = country.flags?.png || country.flags?.svg;
  const pop = country.population?.toLocaleString();
  const lang = country.languages? Object.values(country.languages).join(', ') : 'French';
  box.innerHTML = `<h3>Quick Facts</h3><img src="${flag}" style="width:80px;border-radius:4px;"><p><strong>Official:</strong> ${country.name.official}</p><p><strong>Capital:</strong> ${capital}</p><p><strong>Population:</strong> ${pop}</p><p><strong>Languages:</strong> ${lang}</p>`;
}
export function renderHistory(history) {
    const box = document.querySelector('.history-summary');
    if (!box) return;
    const favs = (getFromLocalStorage('favs') || []).map(String);
    const id = String(history.pageid || 'congo-history');
    const isSaved = favs.includes(id);
    box.innerHTML = `<h3>History Summary</h3><p>${history.extract}</p><button class="favorite-btn ${isSaved?'saved':''}" data-id="${id}">${isSaved?'❤ Saved':'♡ Save'}</button>`;
}