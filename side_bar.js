var menu_button_var = document.getElementById("menu_button");
var comment_button_var = document.getElementById("comment_button");
var back_button_var = document.getElementById("back_button");
var nav_bar_menu = document.getElementById("nav-bar-menu");
var sidebar_open = false;

function openNav(sidebar, tab) {
  sidebar_open = true;
  var style = document.getElementById(sidebar).style;
  style.width = "270px";
  style.shadow = "10px 10px";
  style.background= "hsla(220,50%,30%,0.9)";
  
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
  if(sidebar_open)
  component_reloadSpan();

  sidebar_open = false;
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
      var img = document.createElement('img');
      img.src = "http://chittagongit.com/images/icon-arrow-down/icon-arrow-down-10.jpg";
      img.style = "width: 20px; height 40px;object-fit: contain;";
      arrow.appendChild(img);
      arrow.style.padding = "auto";
      tree.appendChild(arrow);
    }
    for(var j = 0; j < parentNode.length; j++){
      var node = document.createElement('div');
      node.className = "back_tab_tree_nodes";
      node.style.backgroundColor = "hsla(220," + (70+i*5) + "%,"+  (70+i*5) + "%,1)";
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
      link.appendChild(node)
      tree.appendChild(link);
    }
  }
}

