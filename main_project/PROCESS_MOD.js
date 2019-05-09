var pr_categoriesDict = {};
var pr_gamesDict = {};
var pr_usersDict = {};
var pr_editionsDict = {};

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
	return returnList;
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

function pr_loadGameCategoriesList(name){
	var returnList = [];
	var size = Object.keys(pr_gamesDict[name]['categories-list']).length;
	for(i = 0; i < size; i++){
		returnList.push(pr_gamesDict[name]['categories-list'][i])
	}
	console.log(returnList);
	return returnList;
}

function pr_loadGameEditionsList(name){
	var returnList = [];
	var size = Object.keys(pr_gamesDict[name]['editions-list']).length;
	for(i = 0; i < size; i++){
		returnList.push(pr_gamesDict[name]['editions-list'][i])
	}
	console.log(returnList);
	return returnList;
}

/*users*/

function pr_loadUsers(name){
	db_loadUsers(name)
}

/*editions*/

function pr_loadEditions(name){
	db_loadEditions(name)
}
function pr_loadEditionImage(name){
	console.log(pr_editionsDict[name])
	console.log(pr_editionsDict[name]['image-url'])
	return pr_gamesDict[name]['image-url'];
}
function pr_loadEditionSectionText(name,sectionName){
	sectionName = sectionName.toLowerCase();
	console.log(pr_editionsDict[name])
	console.log(pr_editionsDict[name][sectionName])
	console.log(pr_editionsDict[name][sectionName]["text"])
	return pr_editionsDict[name][sectionName]["text"];
}

function pr_loadEditionSectionCommentSpans(name,sectionName){
	sectionName = sectionName.toLowerCase();
	console.log(pr_editionsDict[name])
	console.log(pr_editionsDict[name][sectionName])
	console.log(pr_editionsDict[name][sectionName]["comment-spans-list"])
	var commentSpansList = pr_editionsDict[name][sectionName]["comment-spans-list"];

	var returnList = [];
	var keys = Object.keys(commentSpansList);
	for(i = 0; i < keys.length; i++){
		returnList.push(commentSpansList[keys[i]]);
	}
	console.log(returnList);
	return returnList;
}

function pr_loadComments(commentSpan){
	var returnList = [];
	var values = Object.values(commentSpan["comments-list"]);
	for(i = 0; i < values.length; i++){
		returnList.push(values[i]);
	}
	return returnList;
}

function pr_loadEditionComments(name){
	var returnList = [];
	var values = Object.values(pr_editionsDict[name]["comments-list"]);
	for(i = 0; i < values.length; i++){
		returnList.push(values[i]);
	}
	return returnList;
}

function pr_addEditionComment(name,username,text){
	var n = pr_loadEditionComments(name).length;
	db_addEditionComment(name,{"user": username, "text": text},n);
	pr_editionsDict[name]["comments-list"][n] = {"user": username, "text": text};
}


function pr_addEditionSectionCommentSpan(name,section,start,end,username,text){
	console.log(pr_editionsDict[name][section]["comment-spans-list"]);
	if(pr_editionsDict[name][section]["comment-spans-list"] == null){
		pr_editionsDict[name][section]["comment-spans-list"] = {};
	}
	if(pr_editionsDict[name][section]["comment-spans-list"][start+"-"+end] == null){
		pr_editionsDict[name][section]["comment-spans-list"][start+"-"+end] = {};
	}
	console.log(pr_editionsDict[name][section]["comment-spans-list"]);
	console.log(pr_editionsDict[name][section]["comment-spans-list"][start + "-" + end]);
	var commentSpan = pr_editionsDict[name][section]["comment-spans-list"][start+"-"+end];
	if(commentSpan["comments-list"] == null){
		commentSpan["comments-list"] = {};
	}
	var comments_list = commentSpan["comments-list"];
	comments_list[Object.keys(comments_list).length] = {"user": username, "text": text}; 
	var newCommentSpan = {
		"comments-list": comments_list,
		"start": start,
		"end": end
	};
	pr_editionsDict[name][section]["comment-spans-list"][start+"-"+end] = newCommentSpan;
	db_addEditionSectionComment(name,section,start,end,newCommentSpan);
}

async function test(){
	pr_loadCategories(pr_categoriesDict);
	pr_loadGames(pr_gamesDict);
	pr_loadUsers(pr_usersDict);
	pr_loadEditions(pr_editionsDict);
	await sleep(2000);
	var a_list = pr_loadEditionSectionCommentSpans("Exploding Kitten Normal Edition","background");
	for(var i = 0; i < a_list.length; i++){
		console.log(pr_loadComments(a_list[i]));
	}
	console.log(pr_loadEditionComments("Exploding Kitten Normal Edition"));
	//pr_addEditionComment("Exploding Kitten Normal Edition","user1","oh, i'm testing");
	//pr_addEditionSectionCommentSpan("Exploding Kitten Normal Edition","briefing",0,1,"user2","oh, i'm commenting into briefing");
}
test();