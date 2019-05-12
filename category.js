function create_div_to_carousel(n, name, link){
  var new_div = document.createElement('div');
  if (n==1){
    new_div.className = "game";
    var connect = document.createElement('a');
    connect.setAttribute('href','');
    connect.id = name;
    connect.addEventListener('mousedown', function(){
      var next_destination = document.getElementById(name);
      next_destination.href = "Edition page.html";
      sessionStorage.setItem("game", name);
    })

    var new_div_2 = document.createElement('div');
    new_div_2.className = "shadow p-2 mb-1 bg-white rounded grid-item";
    new_div_2.style.backgroundImage = 'url("' + link + '")';
    
    var span = document.createElement("span");
    span.className = "caption";
    span.appendChild(document.createTextNode(name));
    connect.appendChild(new_div_2);
    connect.appendChild(span);

    new_div.appendChild(connect);
  }
  else{
    new_div.className = "carousel-item";

    var new_div_1 = document.createElement('div');
    new_div_1.className = "grid-container";

    var new_div_2 = document.createElement('div');
    new_div_2.className = "game";

    var connect = document.createElement('a');
    connect.setAttribute('href','');
    connect.id = name;
    connect.addEventListener('mousedown', function(){
      var next_destination = document.getElementById(name);
      next_destination.href = "Edition page.html";
      sessionStorage.setItem("game", name);
    })

    var new_div_3 = document.createElement('div');
    new_div_3.className = "shadow p-2 mb-1 bg-white rounded grid-item";
    new_div_3.style.backgroundImage = 'url("' + link + '")';

    var span = document.createElement("span");
    span.className = "caption";
    span.appendChild(document.createTextNode(name));


    connect.appendChild(new_div_3);
    connect.appendChild(span);
    new_div_2.appendChild(connect);
    new_div_1.appendChild(new_div_2);
    new_div.appendChild(new_div_1);
  }
  return new_div;
}

function add_to_carousel(name, link){
  var show = document.getElementsByClassName('carousel-inner')[0];
  var carousels = document.getElementsByClassName('carousel-item');
  var container = document.getElementsByClassName('grid-container');
  var ul = document.getElementsByClassName('carousel-indicators')[0];
  var num_carousels = carousels.length;
  var items = document.getElementsByClassName('game');
  var num_items = items.length;
  if (num_items % 8 == 0){
    var li = document.createElement("li");
    li.setAttribute("data-target","#katie_carousel");
    li.setAttribute("data-slide-to", num_carousels);
    ul.appendChild(li);
    var new_div = create_div_to_carousel(0, name, link);
    if (num_carousels == 0){
      new_div.className += " active"  
    }
    show.appendChild(new_div);
    
  }
  else{
    var new_div = create_div_to_carousel(1, name, link);
    container[num_carousels-1].appendChild(new_div);
  }
}
strategy = [{name:'Exploding_kittens', img: 'https://crystal-cdn4.crystalcommerce.com/photos/3596253/large/px5bZwit.png'},
        {name: "Splendor", img: 'https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/25/22/2d/25222de7-e338-c8bc-96e0-398fe51cb450/AppIcon-0-1x_U007emarketing-0-0-85-220-4.png/246x0w.jpg' },
        {name: "Catan", img: 'https://steamusercontent-a.akamaihd.net/ugc/777182737403665320/49192643FB0E014CB1C897F7D53C91694E18B02F/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'},
        {name: "Manila", img: 'http://www.ludogames.ph/wp-content/uploads/2015/03/manila1.jpg'},
        {name: "Shadow Hunters", img: 'http://www.devil-pig-games.com/wp-content/uploads/2017/03/CALL3_NightRangers_Illustr_Couv_02.jpg'},
        {name: "Werewolf", img:'https://cdn.shopify.com/s/files/1/1380/9101/products/pic4119482_large.jpg?v=1543676548'},
        {name: "Citadels", img: 'https://cf.geekdo-images.com/itemrep/img/JWp5oNSep3K2vb9AlShhxO12zG0=/fit-in/246x300/pic3239104.jpg'},
        {name: "7 Wonders", img: 'https://cf.geekdo-images.com/opengraph/img/OEX3wOaG21_iC4G5ww_49_AhkIU=/fit-in/1200x630/pic860217.jpg'},
        {name: "Istanbul", img: "https://i.ebayimg.com/images/g/e5EAAOSwMvJcn7Wn/s-l300.jpg"},
        {name: 'Carcassonne', img: "https://steamuserimages-a.akamaihd.net/ugc/259346695103890601/861458C96E78D4785057383E1EC5D31E9F8D566C/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"},
        {name: 'Coming Soon!', img: "https://cdn3.iconfinder.com/data/icons/under-construction-3/500/42-512.png"}]

card = [{name:'Exploding_kittens', img: 'https://crystal-cdn4.crystalcommerce.com/photos/3596253/large/px5bZwit.png'},
        {name: 'Uno', img: "https://cdn6.aptoide.com/imgs/9/8/2/982b3e6fc6753a773bfea99261d0adb9_icon.png?w=240"},
        {name: 'DiXit', img: "https://durbanvillegames.co.za/wp-content/uploads/2018/08/DIX03_1-3.jpg"},
        {name: 'Sushi Go!', img: "https://cdn11.bigcommerce.com/s-o0w0ggq8/images/stencil/1280x1280/products/2770/2132/sushi_go_german__71381.1447774111.jpg?c=2&imbypass=on"},
        {name: 'Coup', img: "https://i.imgur.com/PGIoIft.png" },
        {name: 'Bears vs Babies', img: "https://imasocialgamer.com/wp-content/uploads/2016/11/tumblr_inline_og6subpfrx1uppxeb_540.jpg"},
        {name: 'Avalon', img: "https://i.imgur.com/3A91zoP.png"},
        {name: 'Bang', img: "http://www.gamedynamo.com/images/games/boxart/high/957.jpg"},
        {name: 'Poker Card', img: "https://is1-ssl.mzstatic.com/image/thumb/Purple111/v4/b9/d7/e7/b9d7e785-60a8-35a2-ff74-edc5ec3a2587/source/512x512bb.jpg"},
        {name: 'Coming Soon!', img: "https://cdn3.iconfinder.com/data/icons/under-construction-3/500/42-512.png"}]

role_play = [{name: 'Internal Affair', img: "https://i.imgur.com/fWxq1Vi.png" }, 
            {name: 'Coup', img: "https://i.imgur.com/PGIoIft.png" },
            {name: "Werewolf", img:'https://cdn.shopify.com/s/files/1/1380/9101/products/pic4119482_large.jpg?v=1543676548'},
            {name: 'Avalon', img: "https://i.imgur.com/3A91zoP.png"},
            {name: 'Bang', img: "http://www.gamedynamo.com/images/games/boxart/high/957.jpg"},
            {name: 'Monopoly', img:"https://lh3.googleusercontent.com/BiVWCMEsRtxjQQn3-Tc4f-Opx5BNqGtNm6gE-BazZQyg6qG7f1cZeIp8aMnu8u_Njo8"},
            {name: "Splendor", img: 'https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/25/22/2d/25222de7-e338-c8bc-96e0-398fe51cb450/AppIcon-0-1x_U007emarketing-0-0-85-220-4.png/246x0w.jpg'},
            {name: 'Blood Bound', img: "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1047441.jpg"},
            {name: 'Coming Soon!', img: "https://cdn3.iconfinder.com/data/icons/under-construction-3/500/42-512.png"}]

function display_game(category){
  var games_in_category = pr_loadCategoryGamesList(category);
  for(i=0;i<games_in_category.length;i++){
    var game_img = pr_loadGameImage(games_in_category[i]);
    add_to_carousel(games_in_category[i], game_img);
  }
  for(i = games_in_category.length; i < 20 ; i++){
    add_to_carousel("Unavailable", "data:image/jpeg;base64,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");    
  }
}

function check(){
  var x = sessionStorage.getItem("category");
  sideBar_drawTree([["Main"],[x]]);
  $("#category").text(x + " Game");
  display_game(x);
}
test(check);

































