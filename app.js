const Lista = ["1","2","3"];

document.querySelectorAll(".lista li").forEach((li,index)=>{
  
  li.addEventListener("click",() => {alert("Haz clickeado el elemento "+Lista[index]);
  
  });
});


/*document.querySelector(".lista li:nth-child(1)").addEventListener("click",()=>{

  alert("Haz clickeado el elemento 1");

});*/


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