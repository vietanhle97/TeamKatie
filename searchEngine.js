var se_searchBox = document.getElementById("search_box");
var se_searchSubmitButton = document.getElementById("search_submit_button");


function se_lcs(s1,s2){
	s1 = s1.toLowerCase().replace( /\s/g, '');
	s2 = s2.toLowerCase().replace( /\s/g, '');
	s1 = s1 + s1;
	s2 = s2;
	var ok = new Array(s1.length);
	for (var i = 0; i < ok.length; i++) {
	  ok[i] = new Array(s2.length);
	  for(var j = 0; j < s2.length; j++)
	  	ok[i][j] = new Array(max(s1.length, s2.length));
	}
	var save = new Array(s1.length);
	for (var i = 0; i < save.length; i++) {
	  save[i] = new Array(s2.length);
	  for(var j = 0; j < s2.length; j++)
	  	save[i][j] = new Array(max(s1.length, s2.length));
	}

	function lcs(pos1,pos2,linearIncreasing){
		if(pos1 >= s1.length) return 0;
		if(pos2 >= s2.length) return 0;
		var ans = 0;
		if(ok[pos1][pos2][linearIncreasing] == true) return save[pos1][pos2][linearIncreasing];
		ok[pos1][pos2][linearIncreasing] = true;
		if(s1[pos1] == s2[pos2]){
			ans = max(lcs(pos1 + 1, pos2 + 1,linearIncreasing + 1) + 5 + 2*linearIncreasing, ans);
		}
		ans = max(lcs(pos1, pos2 + 1,0) + 1, ans);
		ans = max(lcs(pos1 + 1, pos2,0) + 1, ans);
		return save[pos1][pos2][linearIncreasing] = ans;
	}
	function max(v1, v2){
		return v1 > v2 ? v1: v2;
	}
	return lcs(0,0);
}

function se_isMatch(s1, s2){
	function min(v1, v2){
		return v1 < v2 ? v1: v2;
	}
	return se_lcs(s1,s2) >= min(s1.length,s2.length) * 5 + s2.length;
}


function se_autocomplete(inp, arr) {
  var currentFocus;
  var searchTimer;
  inp.addEventListener("input", function(e){

  	  clearTimeout(searchTimer);
  	  var THIS = this;
  	  console.log(searchTimer);
  	  searchTimer = setTimeout(
  	  	function() {
	      var a, b, i, val = THIS.value, suggestionCnt = 0;
	      closeAllLists();
	      if (!val) { return false;}
	      currentFocus = -1;
	      a = document.createElement("DIV");
	      a.setAttribute("id", THIS.id + "autocomplete-list");
	      a.setAttribute("class", "autocomplete-items");
	      a.style = "width: 90%;"
	      THIS.parentNode.appendChild(a);
	      var last = a;
	      arr.sort(function(s1,s2){
			return se_lcs(val,s2) - se_lcs(val,s1);
		  })
	      for (i = 0; i < arr.length && suggestionCnt < 5; i++) {
	        if(se_isMatch(val,arr[i])) {
		      suggestionCnt++;
	          b = document.createElement("DIV");
	          b.style = "width: 100%;"
	          b.innerHTML += arr[i];
	          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
	          b.addEventListener("click", function(e) {
	          	  e.stopPropagation();
	              console.log(this.getElementsByTagName("input")[0].value);
	              inp.value = this.getElementsByTagName("input")[0].value;
	              closeAllLists();
	          });

	          a.appendChild(b);
	          last = b;
	        }
	      }}, 200);
  	});

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { //up
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
          currentFocus = -1;
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
test(function(){
	var checkList = [];
	for(var i = 0; i < Object.keys(pr_categoriesDict).length; i++)
		checkList.push(Object.keys(pr_categoriesDict)[i]);

	for(var i = 0; i < Object.keys(pr_gamesDict).length; i++)
		checkList.push(Object.keys(pr_gamesDict)[i]);

	for(var i = 0; i < Object.keys(pr_editionsDict).length; i++)
		checkList.push(Object.keys(pr_editionsDict)[i]);

	console.log(checkList)
	se_autocomplete(se_searchBox, checkList);
})

var se_sitesList
se_searchBox.onkeypress = function(e){
	console.log(e, e == 13);
	if(e.keyCode == 13)
		se_searchSubmitButton.click();
}
se_searchSubmitButton.onclick = function(){
	var text = se_searchBox.value;
	console.log(se_searchBox);
	se_sitesList = [];
	se_searchBox.value = "";

	//Is this a category name?
	for(var i = 0; i < Object.keys(pr_categoriesDict).length; i++){
		var categoryName = Object.keys(pr_categoriesDict)[i];
		console.log(se_isMatch(text, categoryName));
		if(se_isMatch(text, categoryName)){
			se_sitesList.push({"name" : categoryName, "type" : "category"});
		}
	}

	for(var i = 0; i < Object.keys(pr_gamesDict).length; i++){
		var gameName = Object.keys(pr_gamesDict)[i];
		console.log(se_isMatch(text, gameName));
		if(se_isMatch(text, gameName)){
			se_sitesList.push({"name" : gameName, "type" : "game"});
		}
	}

	for(var i = 0; i < Object.keys(pr_editionsDict).length; i++){
		var editionName = Object.keys(pr_editionsDict)[i];
		console.log(text," aaa ",editionName,se_isMatch(text, editionName));
		if(se_isMatch(text, editionName)){
			se_sitesList.push({"name" : editionName, "type" : "edition"});
		}
	}
	se_sitesList.sort(function(s1,s2){
		console.log("compare",s1.name,s2.name,se_lcs(text,s1.name),se_lcs(text,s2.name));
		return se_lcs(text,s2.name) - se_lcs(text,s1.name);
	})
	console.log(se_sitesList);
	sessionStorage.setItem("sitesList", null);
	sessionStorage.setItem("sitesList", JSON.stringify(se_sitesList));
	window.location = "searchPage.html";
}