"use strict";
/* global $ */
var frame = 1, elIntervalo;
console.log(frame+elIntervalo); //sin esto ESlint cree que nunca se usa la variable frame e intervalo.
console.clear();

var animarFavicon = function () {
  //Funcion para mantener en animacion constante el favicon de la pagina.
  var ruta;
  /* Assignacion del frame a desplegar */
  window.frame = ++window.frame;
  if (window.frame > 4) {
    window.frame = 1; //se asegura de que frame se encuentre entre [1,4].
  }
  ruta = "images/frame" + window.frame + ".png";
  $("#favicon").attr("href", ruta);
};

var repetirAnimacion = function () {
  //se evita uno problemas del stack de recursión si se utiliza esto para llamar a la función de animacion.
  elIntervalo = window.setInterval(animarFavicon, 2000); 
};

$(".navbar-nav>li>a").click(function () {
  $(".navbar-collapse").collapse("hide"); //collapses the navbar on mobile screens.
});


//al momento de estar listo el documento, este se empieza a animar continuamente.
$(document).ready(repetirAnimacion);