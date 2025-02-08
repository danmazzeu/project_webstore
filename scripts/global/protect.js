document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

let attempts = localStorage.getItem('attempts') || 0;

if (attempts && attempts >= 5) {
    //window.location.assign = 'https://google.com.br/';
}