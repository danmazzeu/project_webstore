document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

let attempts = localStorage.getItem('attempts');

if (attempts >= 5) {
    window.location.href = 'blocked.html';
    return;
}