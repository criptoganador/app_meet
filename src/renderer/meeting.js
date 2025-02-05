document.addEventListener('DOMContentLoaded', async () => {
    const username = localStorage.getItem('username') || 'Usuario';
    document.getElementById('welcomeMessage').innerText = `Hola, ${username}! Bienvenido a la reunión.`;

    // Intentar acceder a la cámara y micrófono
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        const videoElement = document.getElementById('localVideo');
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Error al acceder a la cámara y el micrófono:', error);
        alert('No se pudo acceder a la cámara/micrófono. Verifica los permisos.');
    }
});

// Botón de salir
document.getElementById('exitBtn').addEventListener('click', () => {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
});
