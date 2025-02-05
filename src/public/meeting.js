document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');

    if (!username) {
        window.location.href = 'index.html';  // Redirige si no hay usuario autenticado
        return;
    }

    document.getElementById('welcomeMessage').innerText = `Hola, ${username}! Bienvenido a la reunión.`;
});

document.getElementById('exitBtn').addEventListener('click', () => {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
});
