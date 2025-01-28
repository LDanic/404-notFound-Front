function validarContraseña() {
    const password = document.getElementById("contra").value;
    const confirmPassword = document.getElementById("validacion").value;
    const mensajeError = document.getElementById("mensaje_error");

    if (password !== confirmPassword) {
        mensajeError.textContent = "Las contraseñas no coinciden.";
        return false;
    }

    mensajeError.textContent = "";
    return true;
}
