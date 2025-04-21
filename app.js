let Producto_seleccionado =document.querySelector(".lista");

Producto_seleccionado.addEventListener("click",()=>{

alert("Haz presionado en este elemento.");

});

function Sumar(){

  let parrafo = document.getElementById("numero_contador");
  let numero = parseInt(parrafo.textContent);
  numero++;
  document.getElementById("numero_contador").innerHTML=numero;

  numero == 100 ? "":alert("Felicidades haz clickeado 100 veces !");
  
}

function Reset(){

  document.getElementById("numero_contador").innerHTML="0";

}