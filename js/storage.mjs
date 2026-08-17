export function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    if (!item) return null;
    try {
        return JSON.parse(item);
    }
    catch {
        return null;
    }
}
export function saveFavorites(id) {
    let favs = getFromLocalStorage('favs') || [];
    const idStr = String(id);
    if (!favs.map(String).includes(idStr)) {
        favs.push(idStr);
        saveToLocalStorage('favs', favs);
    }
}