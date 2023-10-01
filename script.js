
let slideIndex = 0;
showSlides();

function showSlides() {
 let slides = document.querySelectorAll(".slide");
 for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
 }
 slideIndex++;
 if (slideIndex > slides.length) {
     slideIndex = 1;
 }
 slides[slideIndex - 1].style.display = "block";
 setTimeout(showSlides, 2000);
}

function changeSlide(n) {
 slideIndex += n;
 let slides = document.querySelectorAll(".slide");
 if (slideIndex > slides.length) {
     slideIndex = 1;
 }
 if (slideIndex < 1) {
     slideIndex = slides.length;
 }
 for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
 }
 slides[slideIndex - 1].style.display = "block";
}
$(document).ready(function() {
// Obtém a posição do texto
var texto = $("#slideshow");
var posicao = texto.offset();

// Define a posição da barra de links
$("#barra-de-links").css("top", posicao.top + texto.height());
}
