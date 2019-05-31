var menu_button_var = document.getElementById("menu_button");
var comment_button_var = document.getElementById("comment_button");
var back_button_var = document.getElementById("back_button");
var nav_bar_menu = document.getElementById("nav-bar-menu");
var sidebar_open = false;
var sidebar_lock = false;
function openNav(sidebar, tab) {
  
  console.log('try to open'); 
  
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
      node.style.height = "40px";
      var link = document.createElement('a');
      link.setAttribute('i',i);
      link.setAttribute('parent',parentNode[j]);

      link.addEventListener('click',function(){
        var i = this.getAttribute('i');
        var j = this.getAttribute('parent');
        if(i == "1")
          sessionStorage.setItem('category',j);
        else if (i == "2")
          sessionStorage.setItem('game', j);
        else if (i == "3")
          sessionStorage.setItem('edition', j);
        if(i == "0")
          this.href = "main.html";
        else if(i == "1"){
          this.href = "category.html";
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