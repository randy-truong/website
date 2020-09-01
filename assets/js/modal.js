// MODAL SCRIPT
// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

// Opens modal image
function openModal() {
  //if document.getElementId('tab-1') {
    document.getElementById('myModal').style.display = "block";
  //}
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  /*
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
  */
}
// OPEN MODAL IMAGE SCRIPT ENDS HERE



function myFunction() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("display: block") == -1) {
    x.className += "display: block";
  } else { 
    x.className = x.className.replace("display: block", "");
  }
}

$(document).ready(function(){
    $('#img01').click(function(e){

                  //e.preventDefault();
                  $(this).show();  
                  e.stopPropagation();

                });

    });  
// MODAL SCRIPT ENDS HERE