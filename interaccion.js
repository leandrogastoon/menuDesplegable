const boton = document.querySelector(".boton");
const botonCerrar = document.querySelector(".cerrar");
const contenidoLista = document.querySelector(".cont-lista");

boton.addEventListener("mouseover", desplegar);
botonCerrar.addEventListener("click", guardar);

function desplegar(){
    contenidoLista.classList.replace("cont-lista", "desplegar");
}

function guardar(){
    contenidoLista.classList.replace("desplegar", "cont-lista");
}