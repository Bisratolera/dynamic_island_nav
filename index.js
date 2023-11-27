var nav = document.querySelector(".nav");
var logo = document.querySelector(".logo");
var camera = document.querySelector(".camera");

function hovered() {
  nav.classList.remove("hidden")
  logo.style.transition = "opacity 1s ease-in-out";
  camera.style.display = "none"
}

nav.addEventListener("mouseover", hovered) 
nav.addEventListener("mouseleave", ()=>{
  nav.classList.add('hidden');
  logo.style.transition = "opacity .1s ease-in-out";
  camera.style.display = "block"


}) 
