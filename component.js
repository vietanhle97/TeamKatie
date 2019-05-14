var currentTutorialName = sessionStorage.getItem('edition');
var currentUsername = "user1";
var currentUserImage = "https://i.stack.imgur.com/ahCDf.png?s=328&g=1";
var component_spanListDict = {};
var component_sectionContent = {};
var component_sectionBody = {};
var lis = ['Briefing', 'Background', 'Objective', 'Components', 'Rules', 'Setup', 'Tips'];
document.getElementById('content').innerHTML = currentTutorialName;
chatbox_username = currentUsername;
chatbox_userImage = currentUserImage;

function component_loadSpanHTML(name,text,allowDelete){
  component_spanListDict[name].sort((a, b) => (parseInt(a.start) > parseInt(b.start)) ? 1 : -1);
  var newText = "", lastTime = 0;
  for(var i = 0; i < component_spanListDict[name].length; i++){
    var ll = component_spanListDict[name][i]["start"];
    var rr = parseInt(component_spanListDict[name][i]["end"]);
    if(allowDelete && (component_spanListDict[name][i]["comments-list"] == null || component_spanListDict[name][i]["comments-list"].length == 0)){
    	component_spanListDict[name].splice(i,1);
    	i--;
    	continue;
    }
    newText =  newText + text.substring(lastTime,ll) + `<span class = "commentSpan" onclick = \"`
    + `openNav('mySidebar', 'comment_tab'); ` + `component_loadCommentSpanComments(\'` + name + `\',` + i +`)\">` +
            text.substring(ll,rr+1) + 
            '</span>';
    lastTime = rr+1;
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

  chatbox_clearChat();
  for (var j = 0;j<component_spanListDict[section][i]["comments-list"].length;j++){
      var text = component_spanListDict[section][i]["comments-list"][j]["text"];
      var username = component_spanListDict[section][i]["comments-list"][j]["user"];
      var leftOrRight;
      if(username == currentUsername) leftOrRight = "right";
      else leftOrRight = "left";
      chatbox_insertChat(currentTutorialName,username,leftOrRight,text,currentUserImage,function(){});
  }
}
function component_loadEditionComments(name){
  document.getElementById("comment-title-content").innerHTML = name + " (Discusion)";
  chatbox_currentSpan["section"] = "main";
  chatbox_clearChat();
  var commentList = pr_loadEditionComments(name);
  for (var j = 0;j<commentList.length;j++){
      var text = commentList[j]["text"];
      var username = commentList[j]["user"];
      var leftOrRight;
      if(username == currentUsername) leftOrRight = "right";
      else leftOrRight = "left";
      chatbox_insertChat(currentTutorialName,username,leftOrRight,text,currentUserImage,function(){});
  }
}

/* HELPER FUNCTION V*/
function getSelectionCharacterOffsetWithin(element) {
    var start = 0;
    var end = 0;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;
    if (typeof win.getSelection != "undefined") {
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            var range = win.getSelection().getRangeAt(0);
            var preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.startContainer, range.startOffset);
            start = preCaretRange.toString().length;
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            end = preCaretRange.toString().length;
        }
    } else if ( (sel = doc.selection) && sel.type != "Control") {
        var textRange = sel.createRange();
        var preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToStart", textRange);
        start = preCaretTextRange.text.length;
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        end = preCaretTextRange.text.length;
    }
    return { start: start, end: end };
}	
/*HELPER FUNCTION ^*/

function userDragSpan(name){
  var selectedRange = window.getSelection().getRangeAt(0);
  var startPos = selectedRange.startOffset;
  var endPos = selectedRange.endOffset;
  if(startPos >= endPos) {
    closeNav("mySidebar");
    component_loadEditionComments(currentTutorialName);
    return;
  }

  var start_end = getSelectionCharacterOffsetWithin(component_sectionBody[name]);
  chatbox_currentSpan.section = name;
  chatbox_currentSpan.start = start_end["start"];
  chatbox_currentSpan.end = start_end["end"];
  component_spanListDict[name].push({"start":start_end["start"],"end":start_end["end"], "comments-list": []});
  component_sectionBody[name].innerHTML = component_loadSpanHTML(name,component_sectionContent[name],0)
  openNav("mySidebar", 'comment_tab');
  chatbox_clearChat();
}

function onlyLetter(str){
	var tmp = "";
	for(var i = 0; i < str.length; i++)
		if(str[i] >= 'a' && str[i] <='z')
		tmp += str[i];
	return tmp;
}
function create_div_to_carousel(n, name, link){
  var new_div = document.createElement('div');
  if (n==1){
    new_div.className = "game";
    var new_div_2 = document.createElement('div');
    new_div_2.className = "shadow p-2 mb-1 bg-white rounded grid-item";
    new_div_2.id = 'carousel' + name.replace(/\s/g,'');
    new_div_2.addEventListener("click", function(){
      var components = pr_loadEditionComponentImage(currentTutorialName, 'Components');
      $(".popup_show").fadeIn();
      var img_show = document.getElementById("popup_img");
      img_show.setAttribute('src',link);
      var instruction = document.getElementById('popup_text');
      var text = find_text(components, name);
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
      var components = pr_loadEditionComponentImage(currentTutorialName, 'Components');
      $(".popup_show").fadeIn();
      var img_show = document.getElementById("popup_img");
      img_show.setAttribute('src',link);

      var instruction = document.getElementById('popup_text');

      var text = find_text(components,name);
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
                        ['card btn-link','collapse', id, 'false', name])

  var card_header = document.createElement('div');
  card_header.className = 'card-header';
  card_header.id = header;

  var h5 = document.createElement('h5');
  h5.className = 'mb-0';


  var button = document.createElement('button');
  set_multiple_attribute(button, ['class','data-toggle','data-target','aria-expanded','aria-controls'],
                        ['btn btn-link','collapse', id, 'false', name])


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
  newText = component_loadSpanHTML(name,text,1);
  card_body.innerHTML = newText;
  card_body.setAttribute("section-name",name);
  
  if(name=='Components'){
    card_body.innerHTML = carousel;
  }

  else{
  	card_body.addEventListener("mouseup",function(){
                                      userDragSpan(this.getAttribute("section-name"))
                                    });
  }

  data.appendChild(card_body)

  collapse.appendChild(card);
  collapse.appendChild(data);

  all_content.appendChild(collapse);
}


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



// var exploding = [{card: 'Defuse', img: 'https://pbs.twimg.com/media/Czz0Lj0UcAEzKZu.png', text: 'Use Defuse to Explode'},
//             {card: 'Explode', img: "https://i.imgur.com/KV40QE4.png", text:'Dead'},
//             {card: 'Nope', img: "https://pbs.twimg.com/media/CT1SNvIWoAAstvS.jpg", text:'Use Nope to stop Attack or Skip and others'},
//             {card: 'Attack', img: "S", text: 'Nothing'},
//             {card: 'Shuffle', img: "https://pbs.twimg.com/media/CbxlnVdUEAERmru.png", text:'Nothing'},
//             {card: 'See The Future', img: "https://pbs.twimg.com/media/B-J0nBACMAAr71J.png", text:'Nothing'},
//             {card: 'Skip', img: "https://pbs.twimg.com/media/C9T-953XUAIa4Eu.jpg", text:'Nothing'},
//             {card: 'Favor', img: "https://pbs.twimg.com/media/C8Qw1tXXsAAh8F-.jpg", text:'Favor'},
//             {card: 'Tacocat', img: "https://i.imgur.com/F376jwB.png", text:'Nothing'},
//             {card: 'Rainbow cat', img: "https://i.imgur.com/z7BG3zq.png", text:'Nothing'},
//             {card: 'Catermelon', img: "https://i.imgur.com/6WCn12H.png", text:'Nothing'}]



function find_text(components, str){
  for (i=0;i<components.length;i++){
    if (str.toLowerCase() == components[i]['card'].toLowerCase()){
      return components[i]['text'];
    }
  }
}

function add_to_span(instruction, text){
  var split = text.split(' ');

  var instruct = document.getElementById(instruction); 
  for(i=0;i<split.length;i++){
    if(span_list.includes(split[i])){

      var span = document.createElement('span');
      span.innerHTML = split[i];
      span.className = "popup_span";
      console.log(split[i],"in",text);
      span.addEventListener('click', function(){
        console.log("aaaa");

        var img = this.innerHTML;
        console.log(img);
        var name = '#carousel' + onlyLetter(img.toLowerCase());
        console.log(name);
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
var cnt = 0;
function component_reloadSpan(){
	cnt++;
  	for(var i = 0; i < lis.length; i++){
  	 if(lis[i].toLowerCase() != "components"){
	     component_sectionBody[lis[i]].innerHTML = component_loadSpanHTML(lis[i],pr_loadEditionSectionText(currentTutorialName ,lis[i]),1);
     }
  	}
}
var component_in_theme = 1;
function component_change_theme(){
  if(component_in_theme){
  document.getElementById('fail').innerHTML = "No Theme";
  var component_hsl_var = pr_loadEditionTheme(currentTutorialName);
  if(component_hsl_var == null){
  	component_hsl_var = {"h": 200,"s":80,"l":80};
  }
  document.body.style.background = "hsl("+component_hsl_var.h+","+component_hsl_var.s+"%,"+component_hsl_var.l+"%,1)";
  document.getElementById("content").style.color = "hsl("+(component_hsl_var.h)+","+((50+component_hsl_var.s)%101)+"%,"+((50+component_hsl_var.l)%101)+"%,1)";
  }
  else{
  document.getElementById('fail').innerHTML = "Apply Theme";
  document.body.style.background = "white";
  document.getElementById("content").style.color = "black";
  }
  component_in_theme = 1 - component_in_theme;
}

function component_display(){
  var components = pr_loadEditionComponentImage(currentTutorialName, 'Components')
  if(!components || !components.length) return;
  console.log(components);
  var currentGame = sessionStorage.getItem('game');
  sideBar_drawTree([["Main"],pr_loadGameCategoriesList(currentGame),[currentGame],[currentTutorialName]]);

  if(currentTutorialName == null)
    currentTutorialName = "Exploding Kitten Normal Edition";
  for(var i = 0; i < lis.length; i++){
    console.log(lis[i]);
    add_to_collapse(lis[i],i + 1,carousel,pr_loadEditionSectionText(currentTutorialName,lis[i]));
  }

  document.getElementsByClassName("btn-link")[0].click();

  for(i=0;i<components.length;i++){
    add_to_carousel(components[i]['card'].toUpperCase(), components[i]['image-url'])
  }
  component_loadEditionComments(currentTutorialName);

  var check=0;
  document.getElementById('success').addEventListener('click',function(){
      list=document.getElementsByClassName('btn-link');
      if(check%2==1){
        for(i=0;i<list.length;i++)
          if (list[i].getAttribute('aria-expanded')=='true')
            list[i].click();
      document.getElementById('success').innerHTML='Expand All'
      }
      else{        
        for(i=0;i<list.length;i++)
          if (list[i].getAttribute('aria-expanded')=='false')
            list[i].click();
      document.getElementById('success').innerHTML='Collapse All'
      }
      check++;
      console.log(check);
    })
  document.getElementById('fail').addEventListener('click',component_change_theme);
  component_reloadSpan();
}
function add_to_span(instruction, text){
  var components = pr_loadEditionComponentImage(currentTutorialName, 'Components');
  var span_list = [];
  for (i=0;i<components.length;i++){
    span_list.push(components[i]['card']);
  }
  var instruct = document.getElementById(instruction); 
  for(var i = 0; i < text.length; i++){
    var ch = false;
    for(j = 0; j < span_list.length; j++){
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

$("span, .overlay").click(function () {
  $(".popup_show").fadeOut();
});
test(component_display);


