// JavaScript Document

//======NEW SIDENAV PUSH CONTENT W/OPACITY

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

//======NEW SLIDESHOW GALLERY
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");//HAY 6 IMG "mySlides"
  var dots = document.getElementsByClassName("demo");//HAY 6 IMG THUMBAIL "demo"
  var captionText = document.getElementById("caption");//HAY 6 TEXTOS DE IMG
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");//" active" ->LO QUE HAYA + LO QUE ESTÉ ACTIVO + LO QUE ESTÉ VACÍO
  }
	
  if (slides[slideIndex-1] != undefined) {//ADD IF
  slides[slideIndex-1].style.display = "block";//SALE LA IMG PRINCIPAL "Woods" DESPLEGADA
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
  }
}

//======NEW MODAL IMAGE
//CREAR NUEVA FUNCION PARA AÑADIRLA AL HTML 
function abrirModal(foto) {

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
/*var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");*/

//Extraer el src de la imagen que se pulsa
var imagen = '<img class="imagen" src="' + foto.src + '" alt="' + foto.alt + 
        '" style="width:100%">'; /* onClick="cerrarFoto()"*/

//NEW FUNCION QUE TIENE EL CONTENIDO MODAL
var content = document.getElementsByClassName("modal-content")[0];	
	
var captionText = document.getElementById("captionModal");

/*//SE OMITE / LA BORRAMOS	
img.onclick = function(){
  modal.style.display = "block";//ABRE IMG MODAL
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}*/
  modal.style.display = "block";//ABRE IMG MODAL
 /* modalImg.src = this.src;//NO HACE FALTA*/
  content.innerHTML = imagen;
  captionText.innerHTML = foto.alt;//this.alt -> SE ADAPTA A foto QUE HEMOS CREADO ARRIBA
	

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";//CIERRA IMG MODAL
 }
}

//======NEW TAP GALLERY
function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  
  // Get the image text
  var imgText = document.getElementById("imgtext");
  
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}





