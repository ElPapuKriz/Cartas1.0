/*document.querySelector(".lista li:nth-child(1)").addEventListener("click",()=>{

  alert("Haz clickeado el elemento 1");

});*/



/*
const cards = document.querySelectorAll(".cards div");

cards.forEach((x,index_song)=>{

  let song = new Audio(`assets/songs/cards/song${index_song+1}.mp3`);

  x.addEventListener("mouseenter",()=>song.play());

  x.addEventListener("mouseleave",()=>{

    song.pause();
    song.currentTime=0;

  });

});
*/
function getNumeroRandom(min,max){

  return Math.floor(Math.random()*(max-(min-1)))+min;

}

document.querySelectorAll(".lista li").forEach(li=>{

  li.addEventListener("click",() => {
    
    let num = getNumeroRandom(1,5);
    let song = new Audio(`assets/songs/list/song${num}.mp3`);

    song.play();
  });
});

const cartas = document.querySelectorAll(".cards div");

function iniciar(){

  cartas.forEach((contenido,indice)=>{

    

    contenido.addEventListener("click",()=>{
      let song = new Audio("assets/songs/cards/song1.mp3");
      song.play();
        
        alert("El numero de carta es : "+(contenido.dataset.valor || indice+1));
      });
    
    });

}

iniciar();


function getNumerosUnicos(cuantos,min, max) {

  const lista =[];

  for (let i = min; i <= max; i++) lista.push(i);

  for(let i =lista.length-1;i>0;i--){

  const j=Math.floor(Math.random() * (i+1));

  [lista[i],lista[j]] = [lista[j],lista[i]];

  }

  return lista.splice(0,cuantos);

}

function barajear(){
  const sonido = new Audio("assets/songs/button/barajear.mp3");

  sonido.play();

  cartas.forEach(carta => {
    carta.classList.add('barajando');

    carta.addEventListener(
      'animationend',
      () => carta.classList.remove('barajando'),
      { once: true }
    );
  });

 const lista = getNumerosUnicos(3,1,3);

 cartas.forEach((contenido,index) =>{

  contenido.dataset.valor = lista[index];

 });

  
}


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







