/*helper function*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
/*helper function*/





var db_database = firebase.database();

/* database references */

var db_database_root = db_database.ref(); 
var db_database_users = db_database.ref('/users'); 
var db_database_categories = db_database.ref('/categories'); 
var db_database_games = db_database.ref('/games'); 
var db_database_editions = db_database.ref('/editions'); 


/* load categories from database */

function db_loadCategoriesHelper(snapshot,a_dict){
	snapshot.forEach(function(childSnapshot){
		var key = childSnapshot.key;
		var value = childSnapshot.val();
		a_dict[key] = value;
	})
}
function db_loadCategories(a_dict){
	db_database_categories.once('value').then(function(snapshot){
		db_loadCategoriesHelper(snapshot,a_dict)});
}


/* load game from database */

function db_loadGamesHelper(snapshot,a_dict){
	snapshot.forEach(function(childSnapshot){
		var key = childSnapshot.key;
		var value = childSnapshot.val();
		a_dict[key] = value;
	})
}
function db_loadGames(a_dict){
	db_database_games.once('value').then(function(snapshot){
		db_loadGamesHelper(snapshot,a_dict)});
}


/* load user from database */

function db_loadUsersHelper(snapshot,a_dict){
	snapshot.forEach(function(childSnapshot){
		var key = childSnapshot.key;
		var value = childSnapshot.val();
		a_dict[key] = value;
	})
}
function db_loadUsers(a_dict){
	db_database_users.once('value').then(function(snapshot){
		db_loadUsersHelper(snapshot,a_dict)});
}

/* load editions from database */

function db_loadEditionsHelper(snapshot,a_dict){
	snapshot.forEach(function(childSnapshot){
		var key = childSnapshot.key;
		var value = childSnapshot.val();
		a_dict[key] = value;
	})
}
function db_loadEditions(a_dict,callback = function(){}){
	db_database_editions.once('value').then(function(snapshot){
		db_loadEditionsHelper(snapshot,a_dict)}).then(function() {callback()});
}

function db_addEditionComment(name,comment,pos,callback){
	db_database.ref('/editions/'+ name +'/comments-list/'+pos).set(comment).then(function(){
		callback()});
}

function db_addEditionSectionComment(name,section,start,end,newSpan,callback){
	db_database.ref('/editions/'+ name +"/"+section + "/comment-spans-list/"+start+"-"+end).set(newSpan).then(function(){
		callback()});	
}

function db_clearEditionComments(name){
	db_database.ref('/editions/'+ name +"/comments-list").set(null);	
}

function db_clearCommentSpanComments(name,section,start,end){
	db_database.ref('/editions/' + name +"/" + section + "/comment-spans-list/" + start + "-" + end).set(null);
}