
document.getElementById("iniciosesion").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe solo 

    // Obtener los valores de los campos de entrada
    var username = document.querySelector('input[placeholder="Usuario"]').value;
    var password = document.querySelector('input[placeholder="Contraseña"]').value;

    // Verificar si el usuario y la contraseña son correctos
    if (username === "admin" && password === "1234") {
        // Redirigir a index.html si los datos son correctas
        window.location.href = "/agregarproducto.html";
    } else {
        // Mostrar mensaje de error si los datos  son incorrectas
        alert("Usuario y/o contraseña incorrecto");
    }
});
