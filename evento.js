const div = document.getElementById("div");
const boton = document.getElementById("boton");

boton.addEventListener("click",(event)=>{
        event.stopPropagation(); // detiene la propagacion del evento para que frene
        alert('hola');
})
div.addEventListener('click',()=>{
    alert("Hola! Soy el div");
})
