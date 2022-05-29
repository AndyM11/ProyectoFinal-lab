window.onload = () => {
    
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/resources/js/menu.json', true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            menu = JSON.parse(xhr.responseText);
            contenido ="";	
            for (let i = 0; i < menu.opciones.length; i++) {
                contenido += `<li>
                            <a href="${menu.opciones[i].url}">${menu.opciones[i].nombre}</a>
                        </li>`;
            }
           document.querySelector('#ul').innerHTML = contenido;
        }

            opcion="";
            titular = `<h3>${menu.subOpciones[0].contenido}</h3>`;
            for (let i = 1; i < menu.subOpciones.length; i++) {

                opcion +=`<p>${menu.subOpciones[i].opcion}</p>`;

            }
            document.querySelector('#submenu').innerHTML = titular + opcion;
        };
        xhr.send();
    
        const lista = document.querySelector("#ul"),
            submenu = document.querySelector("#submenu");
        lista.addEventListener("mouseover", (event) => {
            if(event.target.tagName === "A"){
            submenu.classList.add("active");
            console.log(event.target.innerHTML);
            }else{
                submenu.classList.remove("active");
            }
    
        });



}