document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('registerNombreuser').value;
    let password = document.getElementById('registerContraseña').value;

    if (localStorage.getItem(username)) {
        alert('Nombre de usuario ya existe');
    } else {
        localStorage.setItem(username, password);
        alert('Usuario registrado exitosamente');
        window.location.href = 'inicio.html'; // Redirigir a la página de inicio de sesión
    }
});

// Manejar el inicio de sesión
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('loginNombreuser').value;
    let password = document.getElementById('loginContraseña').value;

    if (localStorage.getItem(username) === password) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'index.html'; // Redirigir a la página principal
    } else {
        alert('Credenciales inválidas');
    }
});

// Función para actualizar la interfaz basada en el estado de inicio de sesión
function updateUI() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('loginButton')?.style.display = 'none';
        document.getElementById('registerButton')?.style.display = 'none';
        document.getElementById('logoutButton')?.style.display = 'block';
    } else {
        document.getElementById('loginButton')?.style.display = 'block';
        document.getElementById('registerButton')?.style.display = 'block';
        document.getElementById('logoutButton')?.style.display = 'none';
    }
}

// Manejar el cierre de sesión
document.getElementById('logout')?.addEventListener('click', function() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html'; // Redirigir a la página de inicio
});

// Actualizar la interfaz cuando la página se carga
document.addEventListener('DOMContentLoaded', function() {
    updateUI();
});