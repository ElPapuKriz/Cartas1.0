let Producto_seleccionado =document.querySelector(".lista");

Producto_seleccionado.addEventListener("click",()=>{

alert("Haz presionado en este elemento.");

});

function Sumar(){

  let parrafo = document.getElementById("numero_contador");
  let numero = parseInt(parrafo.textContent);
  numero++;
  
  let logro = numero !=100 ? "":alert("Felicidades haz clickeado 100 veces !");
  logro == false ?"":numero=0;
  
  document.getElementById("numero_contador").innerHTML=numero;

  
}

function Reset(){

  document.getElementById("numero_contador").innerHTML="0";

}