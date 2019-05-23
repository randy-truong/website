

  // Get the modal
  var modal = document.getElementById('myModal');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


    // OPENS MODAL IMAGE
        function openModal() {
          document.getElementById('myModal').style.display = "block";
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
          dots[slideIndex-1].className += " active";
          captionText.innerHTML = dots[slideIndex-1].alt;
        }




        function myFunction() {
          var x = document.getElementById("demo");
          if (x.className.indexOf("display: block") == -1) {
            x.className += "display: block";
          } else { 
            x.className = x.className.replace("display: block", "");
          }
        }



    var $el = $("#very-specific-design");
    var elHeight = $el.outerHeight();
    var elWidth = $el.outerWidth();

    var $wrapper = $("#scaleable-wrapper");

    $wrapper.resizable({
      resize: doResize
    });

    function doResize(event, ui) {
      
      var scale, origin;
        
      scale = Math.min(
        ui.size.width / elWidth,    
        ui.size.height / elHeight
      );
      
      $el.css({
        transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
      });
      
    }

    var starterData = { 
      size: {
        width: $wrapper.width(),
        height: $wrapper.height()
      }
    }
    doResize(null, starterData);
    Resources

    $(document).ready(function(){
    $('#img01').click(function(e){

                  //e.preventDefault();
                  $(this).show();  
                  e.stopPropagation();

                });

    });  




function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


$(document).ready(function(){
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
});


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myClick() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#dropbtn')) {
    var dropdowns = document.getElementsByClassName("clickable-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


$('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:10,
    nav:false,
    items:1,
    lazyLoad: true,
    nav:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 60
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 250
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 400
        }
    }
});  

$("body").on("contextmenu", "img", function(e) {
  return false;
});
