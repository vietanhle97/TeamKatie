var check=0;
function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("mySidebar").style.shadow = "10px 10px";
  document.getElementById("mySidebar").style.background="black";
  document.getElementById("mySidebar").style.opacity ="0.55";
  var a = document.getElementsByClassName("sidebar_link");
  var len = a.length;
  for(i=0;i<len;i++){
    a[i].style.color = "white";
  }
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "5%";
  document.getElementById("mySidebar").style.background="transparent";
  document.getElementById("mySidebar").style.opacity ="";
  var a = document.getElementsByClassName("sidebar_link");
  var len = a.length;
  for(i=0;i<len;i++){
    a[i].style.color = "transparent";
  }
}
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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("button");
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
  captionText.innerHTML = 'Oneline description';
}
function choose(ref,status){
  document.getElementById('collapsible'+ref).checked=status;
}
function total(){
  check+=1;
  for(i=1;i<8;i++){
    choose(i,(check%2==1))
  }
}
