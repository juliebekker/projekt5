// Alt herunder er vores galleri, til profilbilleder:

let Galleri = 1;
showSlides(Galleri);

function plusSlides(n) {
  showSlides(Galleri += n);
}
 
function currentSlide(n) {
  showSlides(Galleri = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {Galleri = 1}    
  if (n < 1) {Galleri = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[Galleri-1].style.display = "block";  
  dots[Galleri-1].className += " active";
}