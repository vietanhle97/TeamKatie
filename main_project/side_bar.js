var menu_button_var = document.getElementById("menu_button");
var comment_button_var = document.getElementById("comment_button");
var back_button_var = document.getElementById("back_button");
var nav_bar_menu = document.getElementById("nav-bar-menu");

function openNav(sidebar, tab) {
  var style = document.getElementById(sidebar).style;
  style.width = "275px";
  style.shadow = "10px 10px";
  style.background="black";
  style.opacity ="0.8";
  
  back_button_var.style.position = "fixed";
  back_button_var.style.left = "0px";
  
  menu_button_var.style.position = "fixed";
  menu_button_var.style.left = "70px";
  
  comment_button_var.style.position = 'fixed';
  comment_button_var.style.left = '140px';

  nav_bar_menu.style.position = "fixed";
  nav_bar_menu.style.top = "170px";

  if (tab == 'menu_tab'){
    open_tab('menu_link');
    close_tab('myForm');
  }
  else if(tab == 'comment_tab'){
    close_tab('menu_link');
    open_tab('myForm');
  }
  else{
    close_tab('myForm');
    close_tab('menu_link');
  }
  
}

function closeNav(sidebar) {
  menu_button_var.style.position = 'relative';
  menu_button_var.style.left = '0px';
  comment_button_var.style.position = 'relative';
  comment_button_var.style.left = '0px';
  back_button_var.style.position = "relative";
  back_button_var.style.left = "0px";
  var style = document.getElementById(sidebar).style;
  style.width = "7%";
  style.background="transparent";
  style.opacity ="";
  close_tab('myForm');
  close_tab('menu_link');
}
function open_tab(tab){
  document.getElementById(tab).style.display = 'block';
}
function close_tab(tab){
  document.getElementById(tab).style.display = 'none';
}