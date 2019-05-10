function create_div_to_carousel(n, name, link){
  var new_div = document.createElement('div');
  if (n==1){
    new_div.className = "game";
    var connect = document.createElement('a');
    connect.setAttribute('href','');
    connect.id = name;
    connect.addEventListener('mousedown', function(){
      var next_destination = document.getElementById(name);
      next_destination.href = "Edition page.html"
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
      next_destination.href = "Edition page.html"
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
    console.log(games_in_category[i]);
    var game_img = pr_loadGameImage(games_in_category[i]);
    add_to_carousel(games_in_category[i], game_img);
  }
}

function check(){
  var x = sessionStorage.getItem("category");
  $("#category").text(x);
  if(x == 'Strategy Game'){
    display_game('Strategy');
  }
  else if(x == 'Card Game'){
    display_game('Card');
  }
}
 
var $progressBar = $('.progress-bar');
var $progress = $('.progress');
setTimeout(function() {
    $progressBar.css('width', '25%');
    setTimeout(function() {
        $progressBar.css('width', '50%');
        setTimeout(function() {
            $progressBar.css('width', '75%');
            setTimeout(function(){
              $progressBar.css('width', '100%');
              check();
              $progress.css('display', 'none');
            }, 500)
        }, 500); // WAIT 2 seconds
    }, 500); // WAIT 1 seconds
}, 500); // WAIT 1 second


































