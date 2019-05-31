

function display(){
  	var sitesList = JSON.parse(sessionStorage.getItem("sitesList"));
  	var container = document.getElementById("search_result_container");
  	for(var i = 0; i < sitesList.length; i++){
  		var cur = document.createElement('DIV');
  		cur.style = "height: 15vh; background-color: hsl(220,100%,95%);\
  					margin-bottom: 5vh; border-radius: 7px;"
  		var header = document.createElement('div');
  		header.innerHTML = sitesList[i]["name"];
  		header.style = "color: blue; text-decoration: underline; height: 5vh; font-size: 3vh; text-align: center;\
  						background-color: hsl(220,100%,85%);  border-bottom: 1px solid black;";
  		header.classList.add("result_header");


  		var header2 = document.createElement('div');
  		header2.innerHTML = "Section: " + sitesList[i]["type"].toUpperCase();
  		header2.style = "height: 5vh;\
  						 width: 50%; text-align: left;";

  		var header3 = document.createElement('div');
  		header3.innerHTML = "Section: " + sitesList[i]["type"].toUpperCase();
  		header3.style = "height: 5vh;\
  						 width: 50%; text-align: right;";

  		cur.appendChild(header);
  		cur.appendChild(header2);
  		var pageLink =  document.createElement('p');
  		pageLink.classList.add("result_element");
  		pageLink.setAttribute("link_name",sitesList[i]["name"]);
  		pageLink.onclick = function(){
  			if(this.href == "category.html")
  				sessionStorage.setItem('category',this.getAttribute("link_name"));
	  		else if(this.href == "Edition page.html")
	  				sessionStorage.setItem('game',this.getAttribute("link_name"));
	  		else if(this.href == "component.html"){
	  				for(var i = 0; i < Object.keys(pr_gamesDict).length; i++){
	  					if(pr_loadGameEditionsList(Object.keys(pr_gamesDict)[i]).includes(this.getAttribute("link_name"))){
			  				sessionStorage.setItem('game',Object.keys(pr_gamesDict)[i]);
			  				break;
	  					}
	  				}
	  				sessionStorage.setItem('edition',this.getAttribute("link_name"));
	  		}
	  		window.location = this.href;
  			console.log(this.href, this.getAttribute("link_name"));
  		}
  		if(sitesList[i]["type"] == "category"){
  			pageLink.href = "category.html";
  		}
  		else if(sitesList[i]["type"] == "game"){
  			pageLink.href = "Edition page.html";
  		}
  		else if(sitesList[i]["type"] == "edition"){
  			pageLink.href = "component.html";
  		}
  		pageLink.appendChild(cur);
  		container.appendChild(pageLink);
  	}
}


test(function(){
  	display();
	sideBar_drawTree([["Main"],["Search page"]]);
});