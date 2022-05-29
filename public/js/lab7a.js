window.onload = () => {
    const formulario2 = document.querySelector('#formulario2');
    let error = "", success = "";

    const ComprobarTelefonoDelPariente = () => {

        if (isNaN(formulario2.telefonoPariente.value)) {
            formulario2.telefonoPariente.classList.add('error');
            error += 'El teléfono debe ser un número \n';
            return error;
        } else {
            formulario2.telefonoPariente.classList.remove('error');
            success = true;
            return success;
        }
    }

    const ComprobarEdadDelPariente = () => {
        if (isNaN(formulario2.edadPariente.value)) {
            formulario2.edadPariente.classList.add('error');
            error += 'La edad debe ser un número \n';
            return error;
        } else {
            formulario2.edadPariente.classList.remove('error');
            success = true;
            return success;
        }
    }

    const ComprobarNombreDelPariente = () => {
        if (formulario2.nombrePariente.value === '') {
            formulario2.nombrePariente.classList.add('error');
            error += 'El nombre no puede estar vacío \n';
            return error;
        } else {
            formulario2.nombrePariente.classList.remove('error');
            success = true;
            return success;
        }
    }

    const ComprobarRelacion = () => {
        if (formulario2.relacion.value === '' || formulario2.relacion.value === 'Relación') {
            formulario2.relacion.classList.add('error');
            error += 'La relación no puede estar vacía \n';
            return error;
        } else {
            formulario2.relacion.classList.remove('error');
            success = true;
            return success;
        }
    }

    const almacearDatos2 = (nombre, relacion, edad, telefono, direccion) => {
        let datos2 = {
            nombre: formulario2.nombrePariente.value,
            relacion: formulario2.relacion.value,
            edad: formulario2.edadPariente.value,
            telefono: formulario2.telefonoPariente.value,
            direccion: formulario2.direccionPariente.value,
        }
        localStorage.setItem("datosPariente", JSON.stringify(datos2));
    }

    const relocacion2 = () => { window.location.href = 'lab7b'; }

    const enviar2 = (e) => {
        ComprobarNombreDelPariente()
        ComprobarRelacion()
        ComprobarEdadDelPariente()
        ComprobarTelefonoDelPariente()
        e.preventDefault();
        if (error === '') {
            almacearDatos2(formulario2.nombrePariente.value, formulario2.relacion.value, formulario2.edadPariente.value, formulario2.telefonoPariente.value, formulario2.direccionPariente.value);
            relocacion2();
        } else {
            alert(error);
            e.preventDefault();
            error = "";
        }
    }

    formulario2.addEventListener('submit', enviar2);
}