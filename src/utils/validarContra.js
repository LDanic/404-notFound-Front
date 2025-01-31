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

document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("contra");
    const requisitosLista = document.getElementById("requisitos");
    const longitudItem = document.getElementById("longitud");
    const numeroItem = document.getElementById("numero");

    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value;
        const longitudValida = password.length >= 8;  // Ahora requiere al menos 8 caracteres
        const tieneNumero = /\d/.test(password);

        // Mostrar la lista solo si la contraseña no cumple los requisitos
        if (longitudValida && tieneNumero) {
            requisitosLista.style.display = "none";
        } else {
            requisitosLista.style.display = "block";
        }

        // Marcar requisitos cumplidos
        longitudItem.classList.toggle("cumplido", longitudValida);
        numeroItem.classList.toggle("cumplido", tieneNumero);

    });
});