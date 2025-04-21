/*document.querySelector(".lista li:nth-child(1)").addEventListener("click",()=>{

  alert("Haz clickeado el elemento 1");

});*/

const Lista = ["1","2","3"];

document.querySelectorAll(".lista li").forEach((li,index)=>{
  
  li.addEventListener("click",() => {alert("Haz clickeado el elemento "+Lista[index]);
  
  });
});


const cards = document.querySelectorAll(".cards div");

cards.forEach((x,index_song)=>{

  let song = new Audio(`assets/songs/cards/song${index_song+1}.mp3`);

  x.addEventListener("mouseenter",()=>song.play());

  x.addEventListener("mouseleave",()=>{

    song.pause();
    song.currentTime=0;

  });

});

function Sumar(){
  let song = new Audio("assets/songs/song.mp3")

  let parrafo = document.getElementById("numero_contador");
  let numero = parseInt(parrafo.textContent);
  numero++;
  
  let logro = numero !=100 ? "":alert("Felicidades haz clickeado 100 veces !");
  logro == false ?"":song.play();
  logro == false ?"":numero=0;
  
  document.getElementById("numero_contador").innerHTML=numero;

  
}

function Reset(){

  document.getElementById("numero_contador").innerHTML="0";

}