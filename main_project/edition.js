var slideIndex

var game_name = sessionStorage.getItem('game');

document.getElementById("game").innerHTML = game_name.toUpperCase();
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

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log('abc');
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("button");
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
}
function load_pic(i,name,len,des){
  var url_pic=pr_loadEditionImage(name);
  console.log(url_pic);
  var slide = document.createElement("div");
  slide.className="mySlides";
  var num = document.createElement("div");
  num.className="numbertext";
  num.innerHTML = (i+1)+"/"+len;
  var pic = document.createElement("img");
  pic.src = url_pic;
  pic.style.width="100%";
  pic.className="pic";
  var overlay = document.createElement('div');
  overlay.className="overlay";
  var button = document.createElement("button");
  button.className="button";
  button.id="but"
  button.innerHTML='Read Tutorial';
  var box = document.createElement('div');
  box.className="caption-container";
  var text = document.createElement('p');
  text.id="caption";
  text.innerHTML=des
  overlay.appendChild(button);
  box.appendChild(text);
  slide.appendChild(num);
  slide.appendChild(pic);
  slide.appendChild(box);
  slide.appendChild(overlay);
  var left=document.getElementById('left');
  document.getElementById("slide-container").insertBefore(slide,left);

  }
function load_button(i,name){
  var col = document.createElement('div');
  col.className="columnT";
  var connect = document.createElement('a');
  connect.setAttribute('href', "");
  connect.id = name;

  var btn = document.createElement('button');
  btn.className="button"; 
  btn.style.width="100%";
  btn.addEventListener("mouseover",function(){currentSlide(i+1)});
  btn.innerHTML=name;
  var edition = game_name + name;
  btn.addEventListener('click', function(){
    sessionStorage.setItem('edition', edition);
    document.getElementById(name).href = 'component.html';

  })
  connect.appendChild(btn);
  col.appendChild(connect);
  document.getElementById("rowT").appendChild(col);
}

function load_all_pic(name){
  var edition_list = pr_loadGameEditionsList(name);
  var len = edition_list.length
  for(i=0;i<len;i++){
    desc = pr_loadEditionSectionText(edition_list[i],'briefing');
    load_pic(i,edition_list[i],len,desc);
    load_button(i,edition_list[i].replace(name,""));
  des = pr_loadEditionSectionText(edition_list[0],'briefing');
  slideIndex=1;
  showSlides(slideIndex);
  }
}

setTimeout(function(){
  load_all_pic(game_name);
  document.getElementById("left").addEventListener("click",function(){plusSlides(-1)});
  document.getElementById("right").addEventListener("click",function(){plusSlides(1)});
}, 2000);
