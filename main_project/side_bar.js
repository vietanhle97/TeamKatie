function openNav(sidebar, tab) {
  var style = document.getElementById(sidebar).style;
  style.width = "275px";
  style.shadow = "10px 10px";
  style.background="black";
  style.opacity ="0.8";
  if (tab == 'menu_tab'){
    open_tab('menu_link');
    close_tab('myForm');
  }
  else if(tab == 'comment_tab'){
    close_tab('menu_link');
    open_tab('myForm') = 'block';
  }
  else{
    close_tab('myForm');
    close_tab('menu_link');
  }
  
}

function closeNav(sidebar) {
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
function remove_last_child(tab){
  var menu = document.getElementById(tab);
  menu.removeChild(menu.childNodes[4]);
  menu.removeChild(menu.childNodes[3]);
  menu.style.width = "7%";
}

