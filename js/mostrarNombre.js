const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

// Verificar si hay un usuario guardado
if (usuarioGuardado) {
    // Mostrar el nombre del usuario en el span
    document.getElementById('nombre-usuario').textContent = usuarioGuardado.nombre;
} else {
    // Redirigir a la página de registro si no hay usuario guardado
    window.location.href = 'registro.html'; // Cambia esto por la URL de tu página de registro
}