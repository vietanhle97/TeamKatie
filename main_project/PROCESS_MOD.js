var pr_categoriesDict = {};
var pr_gamesDict = {};
var pr_usersDict = {};

/*categories*/

function pr_loadCategories(name){
	db_loadCategories(name)
}

function pr_loadCategoryImage(name){
	console.log(pr_categoriesDict[name])
	console.log(pr_categoriesDict[name]['image-url'])
	return pr_categoriesDict[name]['image-url'];
}


function pr_loadCategoryGamesList(name){
	var returnList = [];
	var size = Object.keys(pr_categoriesDict[name]['games-list']).length;
	for(i = 0; i < size; i++){
		returnList.push(pr_categoriesDict[name]['games-list'][i])
	}
	console.log(returnList);
}


/*games*/
function pr_loadGames(name){
	db_loadGames(name)
}

function pr_loadGameImage(name){
	console.log(pr_gamesDict[name])
	console.log(pr_gamesDict[name]['image-url'])
	return pr_gamesDict[name]['image-url'];
}

/*users*/

function pr_loadUsers(name){
	db_loadUsers(name)
}


async function test(){
	pr_loadCategories(pr_categoriesDict);
	pr_loadGames(pr_gamesDict);
	pr_loadUsers(pr_usersDict);
	await sleep(1000);
	document.getElementById('test_image').src = pr_loadGameImage("Exploding Kitten");
}
test();