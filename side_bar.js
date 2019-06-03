var menu_button_var = document.getElementById("menu_button");
var comment_button_var = document.getElementById("comment_button");
var back_button_var = document.getElementById("back_button");
var nav_bar_menu = document.getElementById("nav-bar-menu");
var sidebar_open = false;
var sidebar_lock = false;
var currentUsername = sessionStorage.getItem('username');
var currentUserImage = sessionStorage.getItem('avatar')
if (currentUsername){
  var login_icon = document.getElementById('login_icon');
  if (login_icon){
    login_icon.style.display = 'none';
  }
  display_avatar();
}

function display_avatar(){
  var navbar_item = document.getElementById('navbar_item');
  var avatar = document.createElement('li');
  var drop_down = document.createElement('div')
  var profile_card = document.getElementById('profile_card');
  drop_down.className = 'drop_down';
  var ava_img = document.createElement('img');
  ava_img.src = currentUserImage;
  ava_img.id = 'avatar';
  ava_img.style.width = '3em';
  ava_img.style.height = '3em';

  var count = 0;
  ava_img.addEventListener('click', function(){
    document.getElementById('id01').style.display = 'none';
    if (count == 0){
      var profile_card = document.getElementById('profile_card');
      var card_img = document.createElement('img');
      card_img.id = 'card_avatar';
      card_img.src =  ava_img.src;
      var card_name = document.createElement('h5');
      var experience = pr_loadUserInfo(currentUsername)['Experience'];
      var year = document.createElement('h5');
      profile_card.appendChild(card_img);
      card_name.appendChild(document.createTextNode('Player: '+ currentUsername));
      profile_card.appendChild(card_name);
      year.appendChild(document.createTextNode('Experience: ' + experience));
      profile_card.appendChild(year);
      var row = document.createElement('div');
      row.className = 'row';
      var col_1 = document.createElement('div');
      col_1.className = 'col-5';

      var col_2 = document.createElement('div');
      col_2.className = 'col-7'

      var logout_button = document.createElement('button');
      logout_button.className = 'btn btn-light';
      logout_button.id = 'logout_button';
      logout_button.appendChild(document.createTextNode('Logout'));
      logout_button.addEventListener('click', function(){
        logout();
      })
      col_1.appendChild(logout_button)

      var switch_button = document.createElement('button');
      switch_button.className = 'btn btn-light';
      switch_button.id = 'switch_button';
      switch_button.appendChild(document.createTextNode('Switch Account'));
      switch_button.addEventListener('click', function(){
        document.getElementById('id01').style.display = 'block';
        document.getElementById('profile_card').style.display = 'none'
        count += 1
      })
      col_2.appendChild(switch_button)

      row.appendChild(col_1);
      row.appendChild(col_2);

      profile_card.appendChild(row);
      document.getElementById('profile_card').style.display = 'block';
      count = 1;
    }
    else if(count == 2){
      document.getElementById('profile_card').style.display = 'block';
      count = 1;
    }
    else{
      document.getElementById('profile_card').style.display = 'none';
      count = 2;
    }
    $('body').click(function(event){
      if(!$(event.target).is('#avatar')){
        document.getElementById('profile_card').style.display = 'none';
        count = 2
      }
    })
  })
  var align = document.createElement('li');
  align.className = 'nav_item';
  var link = document.createElement('a')
  link.className = 'nav_link';
  link.href = '#';
  align.appendChild(link);
  drop_down.appendChild(ava_img);
  avatar.appendChild(drop_down);
  navbar_item.appendChild(avatar);
  navbar_item.appendChild(align);
  
}
function logout(){
  window.location.replace("main.html");
  sessionStorage.clear();
}

function openNav(sidebar, tab) {
  var category_carousel =  document.getElementById('category_carousel');
  if(category_carousel){
    category_carousel.className = 'col-10'
  }
  if(sidebar_lock == false){
	  console.log('opened'); 

	  sidebar_open = true;
	  if(document.getElementById("gap-column")){
	  document.getElementById("gap-column").display="block";
	  document.getElementById("gap-column").className = "col-2";
	  document.getElementById("col-9").className = "col-9";
	  }
	  var style = document.getElementById(sidebar).style;
	  style.width = "270px";
	  style.shadow = "10px 10px";
	  style.background= "hsla(220,50%,30%,0.9)";
  }

  __lock_button.style.display = "block";

  if(back_button_var){
  back_button_var.style.position = "fixed";
  back_button_var.style.left = "0px";
  }

  if(menu_button_var){
  menu_button_var.style.position = "fixed";
  menu_button_var.style.left = "70px";
  }

  if(comment_button_var){
    comment_button_var.style.position = 'fixed';
    comment_button_var.style.left = '140px';
  }

  if(nav_bar_menu){
  nav_bar_menu.style.position = "fixed";
  nav_bar_menu.style.top = "170px";
  }

  if (tab == 'menu_tab'){
    open_tab('menu_link');
    close_tab('myForm');
    close_tab('back_tab_tree');
  }
  else if(tab == 'comment_tab'){
    close_tab('menu_link');
    open_tab('myForm');
    close_tab('back_tab_tree');
  }
  else{
    open_tab('back_tab_tree');
    close_tab('myForm');
    close_tab('menu_link');
  }
  
}

function closeNav(sidebar) {

  if(sidebar_lock == true) {
  	__lock_button.style = "border: hsl(350,40%,50%) solid 2px;color: hsl(350,40%,50%);"
  	setTimeout(function(){
  		__lock_button.style = "border: hsl(350,40%,50%) solid 0px; color: black;"
  	},500);
  	return;
  }

  if(document.getElementById("gap-column")){
  document.getElementById("gap-column").display="none";
  document.getElementById("col-9").className = "col-11";
  }
  var category_carousel =  document.getElementById('category_carousel');
  if(category_carousel){
    category_carousel.className = 'col-11';
  }
  if(sidebar_open && comment_button_var){
      component_reloadSpan();
  }
  sidebar_open = false;

  __lock_button.style.display = "none";

  if(menu_button_var){
  menu_button_var.style.position = 'relative';
  menu_button_var.style.left = '0px';
  }
  if(comment_button_var){
  comment_button_var.style.position = 'relative';
  comment_button_var.style.left = '0px';
  }
  if(back_button_var){
  back_button_var.style.position = "relative";
  back_button_var.style.left = "0px";
  }

  var style = document.getElementById(sidebar).style;
  style.width = "5%";
  style.background="hsla(220,50%,30%,0.1)";
  style.opacity ="";

  close_tab('menu_link');
  close_tab('back_tab_tree');
  close_tab('myForm');
  
}
function open_tab(tab){
  console.log(tab);
  if(tab == 'myForm'){
	  	if(document.getElementById("gap-column")){
		  document.getElementById("gap-column").display= "block";
		  document.getElementById("gap-column").className = "col-3";
		  document.getElementById("col-9").className = "col-8";
		}
		console.log('style width 28');
	  	var style = document.getElementById('mySidebar').style;
		style.width = "28%";

	  	var style = document.getElementById('nav-bar-menu').style;
		style.width = "27%";
  }
  else{
		if(document.getElementById("gap-column")){
		  document.getElementById("gap-column").display= "block";
		  document.getElementById("gap-column").className = "col-2";
		  document.getElementById("col-9").className = "col-9";
		}
	  	var style = document.getElementById('mySidebar').style;
		style.width = "270px";
  }
  var open_tab = document.getElementById(tab);
  if(open_tab){
    open_tab.style.display = 'block';
  }
}
function close_tab(tab){
  var close_tab = document.getElementById(tab);
  if(close_tab){
    close_tab.style.display = 'none';
  }
}

function sideBar_drawTree(parentList){
  var tree = document.getElementById("back_tab_tree");
  
  var page = window.location.pathname.split("/").pop();
  console.log(page);

  for(var i = 0; i < parentList.length; i++){
    var parentNode = parentList[i];
    if(i > 0){
      var arrow = document.createElement('div');
      var icon = document.createElement('i');
      icon.className = "fas fa-angle-double-down";
      icon.style.color = "white";
      icon.style.transform = 'scale(1.5,1.5)';
      icon.style.marginTop = '2vh';
      icon.style.marginBottom = '2vh';
      arrow.appendChild(icon);
      arrow.style.padding = "auto";
      tree.appendChild(arrow);
    }
    for(var j = 0; j < parentNode.length; j++){
      var node = document.createElement('div');
      node.className = "back_tab_tree_nodes";
      if(i == parentList.length - 1){
        node.style = "border: 1px solid red"
      }
      node.style.backgroundColor = "hsla(220," + (50+i*10) + "%,"+  (60+i*10) + "%,1)";
      node.style.color = "hsla(220,0%,0%,1)";
      node.style.width = (250/parentNode.length) + "px";
      node.style.height = "35px";
      node.style.fontFamily = "Raleway";
      node.style.color = "#1d1145"
      var link = document.createElement('a');
      link.setAttribute('i',i);
      link.setAttribute('parent',parentNode[j]);

      link.addEventListener('click',function(){
        var i = this.getAttribute('i');
        var j = this.getAttribute('parent');
        if(i == "1"){
          if(page != 'searchPage.html')
            sessionStorage.setItem('category',j);
        }
        else if (i == "2")
          sessionStorage.setItem('game', j);
        else if (i == "3")
          sessionStorage.setItem('edition', j);
        if(i == "0")
          this.href = "main.html";
        else if(i == "1"){
          if(page != 'searchPage.html')
            this.href = "category.html";
          else this.href = 'searchPage.html';
        }
        else if(i == "2"){
          this.href = "Edition page.html";
        }
        else{
          this.href = "component.html";
        }
      });
      node.appendChild(document.createTextNode(parentNode[j]));
      node.style.paddingTop ='1vh';
      node.style.paddingBottom = '1vh';
      node.style.fontWeight = 'bold';
      link.appendChild(node)
      tree.appendChild(link);
    }
  }
}

var __lock_button = document.createElement('button');
__lock_button.onclick = function(){
	if(sidebar_lock == true){
		this.innerHTML = '<i class="fas fa-unlock fa-1x"></i>';
	}
	else{
		this.innerHTML = '<i class="fas fa-lock fa-1x"></i>';
	}
	sidebar_lock = sidebar_lock ^ 1;
}

console.log(document.getElementById('mySidebar'));
__lock_button.setAttribute('id','__lock_button');
__lock_button.innerHTML = '<i class="fas fa-lock fa-1x"></i>';
__lock_button.setAttribute('class',"btn btn-circle btn-sm hieu_lockbtn");
document.getElementById('mySidebar').appendChild(__lock_button);

function init(){
	var path = window.location.pathname;
	var page = path.split("/").pop();
	console.log(page);
	if(page == 'component.html')
		openNav('mySidebar','comment_tab');
	else
		openNav('mySidebar','back_tab_tree');
}

init();

sidebar_lock = true;