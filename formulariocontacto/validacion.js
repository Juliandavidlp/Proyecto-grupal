document.getElementById("formularioContacto").addEventListener("submit", function(event) {
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const consulta = document.getElementById("consulta");

    // Elimina los espacios en blanco al principio y al final de la cadena de caracteres
    firstname.value = firstname.value.trim();
    lastname.value = lastname.value.trim();
    consulta.value = consulta.value.trim();

    // Verifica si los valores ingresados están vacíos
    if (firstname.value === "" || lastname.value === "" || consulta.value === "") {
        event.preventDefault(); 
        // Evita el envío del formulario en caso de campos vacíos 
        alert('Los campos de Nombre y Apellido no deben contener solo espacios en blanco.');
    }
});