document.getElementById('loginBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();

    if (username) {
        localStorage.setItem('username', username); // Guarda el nombre en el almacenamiento local
        window.location.href = 'meeting.html'; // Redirige a la sala de videollamada
    } else {
        alert('Por favor, ingresa un nombre');
    }
});
