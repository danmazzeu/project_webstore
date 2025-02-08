document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

let attempts = localStorage.getItem('attempts') || 0;

if (attempts && attempts >= 5) {
    window.location.href = 'https://google.com.br/';
}