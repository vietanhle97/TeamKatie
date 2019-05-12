var currentTutorialName = sessionStorage.getItem('edition');
var currentUsername = "user1";
var currentUserImage = "https://i.stack.imgur.com/ahCDf.png?s=328&g=1";
var component_spanListDict = {};
var component_sectionContent = {};
var component_sectionBody = {};

document.getElementById('content').innerHTML = currentTutorialName;
chatbox_username = currentUsername;
chatbox_userImage = currentUserImage;

function component_loadSpanHTML(name,text){
  var newText = "", lastTime = 0;
  for(var i = 0; i < component_spanListDict[name].length; i++){
    var ll = component_spanListDict[name][i]["start"];
    var rr = parseInt(component_spanListDict[name][i]["end"]);
    newText =  newText + text.substring(lastTime,ll) + `<span class = "commentSpan" onclick = \"`
    + `component_loadCommentSpanComments(\'` + name + `\',` + i +`)\">` +
            text.substring(ll,rr+1) + 
            '</span>';
    lastTime = rr+1;
    console.log(ll,rr,text.substring(ll,rr+1),newText);
  }
  newText = newText + text.substring(lastTime,text.length);
  return newText;
}

function component_spanListUpdate(name){
    component_spanListDict[name] = pr_loadEditionSectionCommentSpans(currentTutorialName,name);
}

function component_loadCommentSpanComments(section,i){
  document.getElementById("comment-title-content").innerHTML = section;
  chatbox_currentSpan["section"] = section;
  chatbox_currentSpan["start"] = component_spanListDict[section][i]["start"];
  chatbox_currentSpan["end"] = component_spanListDict[section][i]["end"];

  openNav("mySidebar", 'comment_tab');
  chatbox_clearChat();
  for (var j = 0;j<component_spanListDict[section][i]["comments-list"].length;j++){
      var text = component_spanListDict[section][i]["comments-list"][j]["text"];
      var username = component_spanListDict[section][i]["comments-list"][j]["user"];
      var leftOrRight;
      if(username == currentUsername) leftOrRight = "right";
      else leftOrRight = "left";
      chatbox_insertChat(currentTutorialName,username,leftOrRight,text,currentUserImage);
  }
}
function component_loadEditionComments(name){
  document.getElementById("comment-title-content").innerHTML = name + " (Discusion)";
  chatbox_currentSpan["section"] = "main";
  openNav("mySidebar", 'comment_tab');
  chatbox_clearChat();
  var commentList = pr_loadEditionComments(name);
  for (var j = 0;j<commentList.length;j++){
      var text = commentList[j]["text"];
      var username = commentList[j]["user"];
      var leftOrRight;
      if(username == currentUsername) leftOrRight = "right";
      else leftOrRight = "left";
      chatbox_insertChat(currentTutorialName,username,leftOrRight,text,currentUserImage);
  }
}


function userDragSpan(name){
  var selectedRange = window.getSelection().getRangeAt(0);
  var startPos = selectedRange.startOffset;
  var endPos = selectedRange.endOffset;
  if(startPos >= endPos) {
    closeNav("mySidebar");
    component_loadEditionComments(currentTutorialName);
    return;
  }
  chatbox_currentSpan.section = name;
  chatbox_currentSpan.start = startPos;
  chatbox_currentSpan.end = endPos;
  component_spanListDict[name].push({"start":startPos,"end":endPos, "comments-list": []});
  component_spanListDict[name].sort((a, b) => (a.start > b.start) ? 1 : -1);
  component_sectionBody[name].innerHTML = component_loadSpanHTML(name,component_sectionContent[name])
  console.log(startPos,endPos);
  openNav("mySidebar", 'comment_tab');
  chatbox_clearChat();
}


function create_div_to_carousel(n, name, link){
  var new_div = document.createElement('div');
  if (n==1){
    new_div.className = "game";
    var new_div_2 = document.createElement('div');
    new_div_2.className = "shadow p-2 mb-1 bg-white rounded grid-item";
    new_div_2.id = 'carousel' + name.replace(/\s/g,'');
    new_div_2.addEventListener("click", function(){
      $(".popup_show").fadeIn();
      var img_show = document.getElementById("popup_img");
      img_show.setAttribute('src',link);
      var instruction = document.getElementById('popup_text');
      var text = find_text(name);
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
    new_div_3.id = 'carousel' + name.replace(/\s/g,'');
    new_div_3.addEventListener("click", function(){
      // $(".img-show img").attr("src", link);
      $(".popup_show").fadeIn();
      var img_show = document.getElementById("popup_img");
      img_show.setAttribute('src',link);

      var instruction = document.getElementById('popup_text');

      var text = find_text(name);
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
  component_sectionContent[name] = text;
  component_sectionBody[name] = card_body;
  component_spanListUpdate(name);
  newText = component_loadSpanHTML(name,text);
  card_body.innerHTML = newText;
  card_body.setAttribute("section-name",name);
  card_body.addEventListener("mouseup",function(){
                                      userDragSpan(this.getAttribute("section-name"))
                                    });


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
            {card: 'Nope', img: "https://pbs.twimg.com/media/CT1SNvIWoAAstvS.jpg", text:'Use Nope to stop Favor, Attack, Shuffle, Skip and See The Future'},
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

function find_str(str1,str2){
  len_1 = str1.length;
  len_2 = str2.length;
  console.log(len_1,len_2)
  for(var i = 0; i + len_1 - 1 < len_2; i++){
    for(var j = 0; j < len_1; j++){
        if(str1[j] != str2[i + j]) break;
        if(j == len_1 - 1)
          return true;
    }
  }
  return false;
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
  var instruct = document.getElementById(instruction); 
  for(var i = 0; i < text.length; i++){
    var ch = false;
    for(j = 0; j < span_list.length; j++){
      console.log(span_list[j])
      console.log(span_list[j].length)
      for(k = 0; k < span_list[j].length; k++){
        if(text[i + k] != span_list[j][k]) break;
        if(k + 1 == span_list[j].length){
           var span = document.createElement('span');
           span.innerHTML = span_list[j];
           span.className = "popup_span"
           span.addEventListener('click',function(){
              var img = this.innerHTML;
              var name = '#carousel' + img.replace(/\s/g,'').toUpperCase();
              $(name).trigger('click');
           })
           instruct.appendChild(span);
           i += span_list[j].length - 1;
           j = span_list.length;
           ch = true;
           break; 
        }
      }
    }
    if(!ch) instruct.appendChild(document.createTextNode(text[i]));
  }
}


function component_display(){
  console.log(currentTutorialName);
  if(currentTutorialName == null)
    currentTutorialName = "Exploding Kitten Normal Edition";
  for(var i = 0; i < lis.length; i++){
    add_to_collapse(lis[i],i + 1,carousel,pr_loadEditionSectionText(currentTutorialName,lis[i]));
  }

  for(i=0;i<exploding.length;i++){
    add_to_carousel(exploding[i]['card'].toUpperCase(), exploding[i]['img'])
  }
  component_loadEditionComments(currentTutorialName);
}


$("span, .overlay").click(function () {
  $(".popup_show").fadeOut();
});


test(component_display)



