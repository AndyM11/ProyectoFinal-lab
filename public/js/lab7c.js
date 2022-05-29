window.onload = () => {

    //cargar datos del localsotrage
    let datos3 = JSON.parse(localStorage.getItem("RegistroEnfermidad"));
    let datos2 = JSON.parse(localStorage.getItem("datosPariente"));
    let datos1 = JSON.parse(localStorage.getItem("datosPersonales"));

    //colocar los datos cargados en la tabla html
    document.getElementById("enfermedad").innerHTML = datos3.enfermedad;
    document.getElementById("tiempo").innerHTML = datos3.tiempo;
    document.getElementById("detalles").innerHTML = datos3.detalles;

    document.getElementById("nombre").innerHTML = datos1.nombre;
    document.getElementById("apellido").innerHTML = datos1.apellido;
    document.getElementById("edad").innerHTML = datos1.edad;
    document.getElementById("email").innerHTML = datos1.email;
    document.getElementById("telefono").innerHTML = datos1.telefono;
    document.getElementById("direccion").innerHTML = datos1.direccion;
    document.getElementById("sexo").innerHTML = datos1.sexo;

    document.getElementById("nombreP").innerHTML = datos2.nombre;
    document.getElementById("relacion").innerHTML = datos2.relacion;
    document.getElementById("telefonoP").innerHTML = datos2.telefono;
    document.getElementById("direccionP").innerHTML = datos2.direccion;
    document.getElementById("edadP").innerHTML = datos2.edad;



}