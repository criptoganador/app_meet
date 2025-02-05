import { auth, provider, signInWithPopup, signInWithEmailAndPassword } from "./firebaseConfig.js";

document.getElementById('loginEmailBtn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        localStorage.setItem('username', user.email);
        window.location.href = 'meeting.html';
    } catch (error) {
        alert('Error al iniciar sesión: ' + error.message);
    }
});

document.getElementById('googleLoginBtn').addEventListener('click', async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        localStorage.setItem('username', user.displayName);
        window.location.href = 'meeting.html';
    } catch (error) {
        alert('Error con Google: ' + error.message);
    }
});
