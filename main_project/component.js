function create_div_to_carousel(n, name, link){
  var new_div = document.createElement('div');
  if (n==1){
    new_div.className = "game";
    var new_div_2 = document.createElement('div');
    new_div_2.className = "shadow p-2 mb-1 bg-white rounded grid-item";
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
function add_to_collapse(name, head, carousel){
  var header = "'" + head + "'"
  var id = '#' + name;

  var all_content = document.getElementById('col-9');

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


  if(name=='Components'){
    card_body.innerHTML = carousel;
  }

  data.appendChild(card_body)

  collapse.appendChild(card);
  collapse.appendChild(data);

  all_content.appendChild(collapse);
}
var a = ['Briefing']
var lis = ['Briefing', 'BackGround', 'Objectives', 'Rule', 'Setup', 'Tips'];

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

add_to_collapse('Briefing',1,carousel);
add_to_collapse('BackGround',2,carousel);
add_to_collapse('Objectives',3,carousel);
add_to_collapse('Components',4,carousel);
add_to_collapse('Rule',5,carousel);
add_to_collapse('Setup',6,carousel);
add_to_collapse('Tips',7,carousel);





function add_to_carousel(name, link){
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


exploding = [{card: 'Defuse', img: 'https://pbs.twimg.com/media/Czz0Lj0UcAEzKZu.png'},
            {card: 'Explode', img: "https://i.imgur.com/KV40QE4.png"},
            {card: 'Nope', img: "https://pbs.twimg.com/media/CT1SNvIWoAAstvS.jpg"},
            {card: 'Card', img: "https://techanimate.com/wp-content/uploads/2018/08/attack-card.png"},
            {card: 'Shuffle', img: "https://pbs.twimg.com/media/CbxlnVdUEAERmru.png"},
            {card: 'See The Future', img: "https://pbs.twimg.com/media/B-J0nBACMAAr71J.png"},
            {card: 'Skip', img: "https://pbs.twimg.com/media/C9T-953XUAIa4Eu.jpg"},
            {card: 'Favor', img: "https://pbs.twimg.com/media/C8Qw1tXXsAAh8F-.jpg"},
            {card: 'Tacocat', img: "https://i.imgur.com/F376jwB.png"},
            {card: 'Rainbow cat', img: "https://i.imgur.com/z7BG3zq.png"},
            {card: 'Catermelon', img: "https://i.imgur.com/6WCn12H.png"}]

function display(){
  for(i=0;i<exploding.length;i++){
    add_to_carousel(exploding[i]['card'].toUpperCase(), exploding[i]['img'])
  }
}

display();




