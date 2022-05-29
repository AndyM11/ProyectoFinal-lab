const Cuenta = document.querySelector('#cuenta'),
    Inversiones = document.querySelector('#inversiones'),
    Tarjetas = document.querySelector('#tarjetas'),
    Prestamos = document.querySelector('#prestamos'),
    Seguros = document.querySelector('#seguros'),
    Opciones = document.querySelector('#opciones'),
    Remesas = document.querySelector('#remesas'),
    Logo = document.querySelector('.logo'),
    Ocuenta = document.querySelector('.cuenta'),
    Oinversiones = document.querySelector('.inversiones'),
    Otarjetas = document.querySelector('.tarjetas'),
    Oprestamos = document.querySelector('.prestamos'),
    Oseguros = document.querySelector('.seguros');



    //poner y quitar la clase active de la caja opciones
    
    Cuenta.addEventListener('mousemove', () => {
        Opciones.classList.add("active");
        Ocuenta.classList.add("active");

        Oinversiones.classList.remove("active");
        Otarjetas.classList.remove("active");
        Oprestamos.classList.remove("active");
        Oseguros.classList.remove("active");

        Opciones.addEventListener("mouseleave", () => {
            Opciones.classList.remove("active");
        })
        
    });

    Inversiones.addEventListener('mousemove', () => {
        Opciones.classList.add("active");
        Oinversiones.classList.add("active");

        Ocuenta.classList.remove("active");
        Otarjetas.classList.remove("active");
        Oprestamos.classList.remove("active");
        Oseguros.classList.remove("active");

        Opciones.addEventListener("mouseleave", () => {
            Opciones.classList.remove("active");
        })
    });

    Tarjetas.addEventListener('mousemove', () => {
        Opciones.classList.add("active");
        Otarjetas.classList.add("active");

        Ocuenta.classList.remove("active");
        Oinversiones.classList.remove("active");
        Oprestamos.classList.remove("active");
        Oseguros.classList.remove("active");

        Opciones.addEventListener("mouseleave", () => {
            Opciones.classList.remove("active");
        })
    });

    Prestamos.addEventListener('mousemove', () => {
        Opciones.classList.add("active");
        Oprestamos.classList.add("active");

        Ocuenta.classList.remove("active");
        Oinversiones.classList.remove("active");
        Otarjetas.classList.remove("active");
        Oseguros.classList.remove("active");

        Opciones.addEventListener("mouseleave", () => {
            Opciones.classList.remove("active");
        })
    });

    Seguros.addEventListener('mousemove', () => {
        Opciones.classList.add("active");
        Oseguros.classList.add("active");

        Ocuenta.classList.remove("active");
        Oinversiones.classList.remove("active");
        Otarjetas.classList.remove("active");
        Oprestamos.classList.remove("active");

        Opciones.addEventListener("mouseleave", () => {
            Opciones.classList.remove("active");
        })
    });

    Remesas.addEventListener("mousemove", () => {
        Opciones.classList.remove("active");
    });

    Logo.addEventListener("mousemove", () => {
        Opciones.classList.remove("active");
    });