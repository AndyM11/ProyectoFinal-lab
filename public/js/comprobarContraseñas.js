window.onload = () => {
    const formulario = document.querySelector('.formulario');

    // Comprobar que las contraseñas coinciden sin tener que seleccionar el botón de confirmar

    
    formulario.addEventListener('submit', (e) => {
        
            if (formulario.pass.value === formulario.pass2.value) {
                formulario.pass.classList.remove('error');
                formulario.pass2.classList.remove('error');
            } else {
                formulario.pass.classList.add('error');
                formulario.pass2.classList.add('error');
                e.preventDefault();
                alert('Las contraseñas no coinciden');
            }
        
    });
};