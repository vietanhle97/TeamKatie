var pr_categoriesDict = {};
var pr_gamesDict = {};
var pr_usersDict = {};
/*categories*/

function pr_loadCategories(name){
	db_loadCategories(name)
}

function pr_loadCategoryImage(name){
	return pr_categoriesDict[name]['image-url'];
}

function all_categories(){
	var categories = [];
	var categories_list = Object.keys(pr_categoriesDict);
	for (i=0;i<categories_list.length;i++){
		categories.push(categories_list[i]);
	}
	return categories;
}

function pr_loadCategoryGamesList(name){
	var returnList = [];
	var size = Object.keys(pr_categoriesDict[name]['games-list']).length;
	for(i = 0; i < size; i++){
		returnList.push(pr_categoriesDict[name]['games-list'][i])
	}
	return returnList;
}


/*games*/
function pr_loadGames(name){
	db_loadGames(name)
}

function pr_loadGameImage(name){
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
}
test();