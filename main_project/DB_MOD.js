/*helper function*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
/*helper function*/



var firebaseConfig = {
    apiKey: "AIzaSyBcvCd-WRd3Rg_qvTOemaLcqv7ybNjjRzI",
    authDomain: "teamkatie-3d32d.firebaseapp.com",
    databaseURL: "https://teamkatie-3d32d.firebaseio.com",
    projectId: "teamkatie-3d32d",
    storageBucket: "teamkatie-3d32d.appspot.com",
    messagingSenderId: "378994974940",
    appId: "1:378994974940:web:6034581b53ec1046"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db_database = firebase.database();

/* database references */

var db_database_root = db_database.ref(); 
var db_database_users = db_database.ref('/users'); 
var db_database_categories = db_database.ref('/categories'); 
var db_database_games = db_database.ref('/games'); 


/* load categories from database */

function db_loadCategoriesHelper(snapshot,a_dict){
	console.log(snapshot)
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
	console.log(snapshot)
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
	console.log(snapshot)
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
