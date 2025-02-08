document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

let attempts = localStorage.getItem('attempts') || 0;

if (attempts && attempts >= 5) {
    alert("You have exceeded the maximum number of attempts.  You are now being redirected.");
    window.location.href = 'blocked.html';
    return;
}