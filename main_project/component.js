var currentTutorialName = "Exploding Kitten Normal Edition";
var currentSpan = {"section": null, "start": null, "end": null};
var currentUsername = "user1";
var currentUserImage = "https://i.stack.imgur.com/ahCDf.png?s=328&g=1";
var edition = sessionStorage.getItem('edition');
document.getElementById('content').innerHTML = edition;
chatbox_username = currentUsername;
chatbox_userImage = currentUserImage;
console.log(document.URL);

function userDragSpan(name){
  var selectedRange = window.getSelection().getRangeAt(0);
  var startPos = selectedRange.startOffset;
  var endPos = selectedRange.endOffset;
  if(startPos >= endPos) {
    closeNav("mySidebar");
    return;
  }
  currentSpan.section = name;
  currentSpan.start = startPos;
  currentSpan.end = endPos;
  openNav("mySidebar", 'comment_tab');
  chatbox_clearChat();
  console.log(currentSpan)
}


function create_div_to_carousel(n, name, link){
  var new_div = document.createElement('div');
  if (n==1){
    new_div.className = "game";
    var new_div_2 = document.createElement('div');
    new_div_2.className = "shadow p-2 mb-1 bg-white rounded grid-item";
    new_div_2.id = 'carousel' + name;
    new_div_2.addEventListener("click", function(){
      $(".popup_show").fadeIn();
      var img_show = document.getElementById("popup_img");
      img_show.setAttribute('src',link);
      var instruction = document.getElementById('popup_text');
      var text = find_text(name);
      console.log(text)
      instruction.innerHTML ='';
      add_to_span('popup_text', text);
      
    })
    new_div_2.style.backgroundImage = 'url("' + link + '")';
    var span = document.createElement("span");
    span.className = "caption";
    span.appendChild(document.createTextNode(name));
    new_div.appendChild(new_div_2);
    new_div.appendChild(span);
  }
  else{
    new_div.className = "carousel-item";

    var new_div_1 = document.createElement('div');
    new_div_1.className = "grid-container";

    var new_div_2 = document.createElement('div');
    new_div_2.className = "game";

    var new_div_3 = document.createElement('div');
    new_div_3.className = "shadow p-2 mb-1 bg-white rounded grid-item";
    new_div_3.id = 'carousel' + name;
    new_div_3.addEventListener("click", function(){
      // $(".img-show img").attr("src", link);
      $(".popup_show").fadeIn();
      var img_show = document.getElementById("popup_img");
      img_show.setAttribute('src',link);

      var instruction = document.getElementById('popup_text');

      var text = find_text(name);
      console.log(text);
      instruction.innerHTML = '';
      add_to_span('popup_text', text);

    })
    new_div_3.style.backgroundImage = 'url("' + link + '")';


    var span = document.createElement("span");
    span.className = "caption";
    span.appendChild(document.createTextNode(name));

    new_div_2.appendChild(new_div_3);
    new_div_2.appendChild(span);
    new_div_1.appendChild(new_div_2);
    new_div.appendChild(new_div_1);
  }
  return new_div;
}

function set_multiple_attribute(element, name, value){
  var len = name.length;
  for(i=0;i<len;i++){
    element.setAttribute(name[i],value[i])
  }
}


function add_to_collapse(name, head, carousel,text){
  var header = "'" + head + "'"
  var id = '#' + name;

  var all_content = document.getElementById('col-9');
  console.log(all_content)

  var collapse = document.createElement('div');
  collapse.id = 'collapse';

  var card = document.createElement('div');
  //card.className = 'card';
  set_multiple_attribute(card, ['class','data-toggle','data-target','aria-expanded','aria-controls'],
                        ['card btn-link','collapse', id, 'true', name])

  var card_header = document.createElement('div');
  card_header.className = 'card-header';
  card_header.id = header;

  var h5 = document.createElement('h5');
  h5.className = 'mb-0';


  var button = document.createElement('button');
  set_multiple_attribute(button, ['class','data-toggle','data-target','aria-expanded','aria-controls'],
                        ['btn btn-link','collapse', id, 'true', name])


  button.appendChild(document.createTextNode(name));
  h5.appendChild(button);
  card_header.appendChild(button);
  card.appendChild(card_header);
  
  var data = document.createElement('div');
  var header_id = '#' + header
  set_multiple_attribute(data,['id', 'class', 'aria-labelledby','data-parent'],
                        [name, 'collapse',  header_id, '#collapse'])


  var card_body = document.createElement('div')
  card_body.className = 'card-body';
  card_body.innerHTML = text;
  card_body.setAttribute("section-name",name);
  card_body.addEventListener("mouseup",function(){
                                      userDragSpan(this.getAttribute("section-name"))});


  if(name=='Components'){
    card_body.innerHTML = carousel;
  }

  data.appendChild(card_body)

  collapse.appendChild(card);
  collapse.appendChild(data);

  all_content.appendChild(collapse);
}
var a = ['Briefing']
var lis = ['Briefing', 'BackGround', 'Objective', 'Components', 'Rules', 'Setup', 'Tips'];

var carousel = `<div id="katie_carousel" class="carousel slide" data-ride="carousel" data-interval="false">
              <!-- Indicators -->
                  <ol class="carousel-indicators"></ol>
              <!-- The slideshow -->
                  <div class="carousel-inner">
                  </div>
              <!-- Left and right controls -->
                  <a class="carousel-control-prev" href="#katie_carousel" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                  </a>
                  <a class="carousel-control-next" href="#katie_carousel" data-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </a>
          </div>`;


async function add_to_carousel(name, link){
  var show = document.getElementsByClassName('carousel-inner')[0];
  var carousels = document.getElementsByClassName('carousel-item');
  var container = document.getElementsByClassName('grid-container');
  var ul = document.getElementsByClassName('carousel-indicators')[0];
  var num_carousels = carousels.length;
  var items = document.getElementsByClassName('game');
  var num_items = items.length;
  if (num_items % 6 == 0){
    var li = document.createElement("li");
    li.setAttribute("data-target","#katie_carousel");
    li.setAttribute("data-slide-to", num_carousels);
    ul.appendChild(li);
    var new_div = create_div_to_carousel(0, name, link);
    new_div.id = name;
    if (num_carousels == 0){
      new_div.className += " active"  
    }
    show.appendChild(new_div);
    
  }
  else{
    var new_div = create_div_to_carousel(1, name, link);
    new_div.id = name;
    container[num_carousels-1].appendChild(new_div);
  }
}



var exploding = [{card: 'Defuse', img: 'https://pbs.twimg.com/media/Czz0Lj0UcAEzKZu.png', text: 'Use Defuse to Explode'},
            {card: 'Explode', img: "https://i.imgur.com/KV40QE4.png", text:'Dead'},
            {card: 'Nope', img: "https://pbs.twimg.com/media/CT1SNvIWoAAstvS.jpg", text:'Use Nope to stop Attack or Skip and others'},
            {card: 'Attack', img: "https://i.imgur.com/wn5hzMH.png", text: 'Nothing'},
            {card: 'Shuffle', img: "https://pbs.twimg.com/media/CbxlnVdUEAERmru.png", text:'Nothing'},
            {card: 'See The Future', img: "https://pbs.twimg.com/media/B-J0nBACMAAr71J.png", text:'Nothing'},
            {card: 'Skip', img: "https://pbs.twimg.com/media/C9T-953XUAIa4Eu.jpg", text:'Nothing'},
            {card: 'Favor', img: "https://pbs.twimg.com/media/C8Qw1tXXsAAh8F-.jpg", text:'Favor'},
            {card: 'Tacocat', img: "https://i.imgur.com/F376jwB.png", text:'Nothing'},
            {card: 'Rainbow cat', img: "https://i.imgur.com/z7BG3zq.png", text:'Nothing'},
            {card: 'Catermelon', img: "https://i.imgur.com/6WCn12H.png", text:'Nothing'}]
var span_list = [];
for (i=0;i<exploding.length;i++){
  span_list.push(exploding[i]['card']);
}
function find_img(str){
  for (i=0;i<exploding.length;i++){
    if (str.toLowerCase() == exploding[i]['card'].toLowerCase()){
      return exploding[i]['img'];
    }
  }
}

function find_text(str){
  for (i=0;i<exploding.length;i++){
    if (str.toLowerCase() == exploding[i]['card'].toLowerCase()){
      return exploding[i]['text'];
    }
  }
}

function add_to_span(instruction, text){
  var split = text.split(' ');

  var instruct = document.getElementById(instruction); 
  for(i=0;i<split.length;i++){
    if(span_list.includes(split[i])){

      console.log(split[i]);


      var span = document.createElement('span');
      span.innerHTML = split[i];
      span.className = "popup_span";
      span.addEventListener('click', function(){

        var img = this.innerHTML;
        var name = '#carousel' + img.toUpperCase();
        console.log($(name));
        $(name).trigger( "click" );
      })
      instruct.appendChild(span);
      instruct.appendChild(document.createTextNode(' ')) // instruct.innerHTML += ' ';
    }
    else{
      instruct.appendChild(document.createTextNode(split[i]+ ' '));
    }
  }
}


function display(){
  for(var i = 0; i < lis.length; i++){
    add_to_collapse(lis[i],i + 1,carousel,pr_loadEditionSectionText(currentTutorialName,lis[i]));
  }

  for(i=0;i<exploding.length;i++){
    add_to_carousel(exploding[i]['card'].toUpperCase(), exploding[i]['img'])
  }
  chatbox_insertChat("user1","right","oh oh lalalal","https://i.stack.imgur.com/ahCDf.png?s=328&g=1")
  chatbox_insertChat("user1","left","duong cong em do ma\n oh oh la la\n ngap tran sexy lady hey", "https://i.stack.imgur.com/ahCDf.png?s=328&g=1")
}


$("span, .overlay").click(function () {
  $(".popup_show").fadeOut();
});


setTimeout(display,5000);



