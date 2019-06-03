var pr_categoriesDict = {};
var pr_gamesDict = {};
var pr_usersDict = {};
var pr_editionsDict = {};

/*categories*/

function pr_loadCategories(name){
	db_loadCategories(name)
}

function pr_loadCategoryImage(name){
	return pr_categoriesDict[name]['image-url'];
}

function pr_loadAllCategories(){
	return Object.keys(pr_categoriesDict);
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

function pr_loadGameCategoriesList(name){
	var returnList = [];
	var size = Object.keys(pr_gamesDict[name]['categories-list']).length;
	for(i = 0; i < size; i++){
		returnList.push(pr_gamesDict[name]['categories-list'][i])
	}
	return returnList;
}

function pr_loadGameEditionsList(name){
	var returnList = [];
	var size = Object.keys(pr_gamesDict[name]['editions-list']).length;
	for(i = 0; i < size; i++){
		returnList.push(pr_gamesDict[name]['editions-list'][i])
	}
	return returnList;
}

/*users*/

function pr_loadUsers(name){
	db_loadUsers(name)
}
function pr_loadUsersList(){
	return Object.keys(pr_usersDict)
}
function pr_loadUserInfo(name){
	return pr_usersDict[name]
}
function pr_addNewUser(username, password, year_playing, img_url, callback){
	if (year_playing != '1'){
		var experience = year_playing + ' Years';
	}
	else{
		var experience = year_playing + ' Year';
	}
	db_addNewUser(username, {"password": password, 'Experience': experience, 'img-url': img_url}, callback);
	pr_usersDict[username] = {"password": password, 'Experience': experience, 'img-url': img_url};
}
/*editions*/
function pr_loadEditions(name,callback){
	db_loadEditions(name,callback)
}


function pr_loadEditionImage(name){
	return pr_editionsDict[name]['image-url'];
}

function pr_loadEditionTheme(name){
	return pr_editionsDict[name]["theme"];
}

function pr_loadEditionSectionText(name,sectionName){
	sectionName = sectionName.toLowerCase();
	return pr_editionsDict[name][sectionName]["text"];
}

function pr_loadEditionComponentImage(name, sectionName){
	sectionName = sectionName.toLowerCase();
	if(pr_editionsDict[name][sectionName] == null || pr_editionsDict[name][sectionName]["objects-list"] == null){
		return [];
	}
	var popup_span = pr_editionsDict[name][sectionName]["objects-list"];
	var returnList =[];
	var keys = Object.keys(popup_span);
	for(i = 0; i < keys.length; i++){
		returnList.push(popup_span[keys[i]]);
	}
	return returnList;
}

function pr_loadEditionSectionCommentSpans(name,sectionName){
	pr_loadEditions(pr_editionsDict);
	sectionName = sectionName.toLowerCase();
	if(pr_editionsDict[name][sectionName]["comment-spans-list"] == null){
		return [];
	}
	var commentSpansList = pr_editionsDict[name][sectionName]["comment-spans-list"];

	var returnList = [];
	var keys = Object.keys(commentSpansList);
	for(i = 0; i < keys.length; i++){
		returnList.push(commentSpansList[keys[i]]);
	}
	return returnList;
}

function pr_loadComments(commentSpan){
	pr_loadEditions(pr_editionsDict);
	var returnList = [];
	var values = Object.values(commentSpan["comments-list"]);
	for(i = 0; i < values.length; i++){
		returnList.push(values[i]);
	}
	return returnList;
}

function pr_loadEditionComments(name,callback){
	var returnList = [];
	pr_loadEditions(pr_editionsDict);
	if(pr_editionsDict[name]["comments-list"] == null){
		pr_editionsDict[name]["comments-list"] = {};
	}
	var values = Object.values(pr_editionsDict[name]["comments-list"]);
	for(i = 0; i < values.length; i++){
		returnList.push(values[i]);
	}
	return returnList;
}

function pr_addEditionComment(name,username,text,callback){
	var n = pr_loadEditionComments(name).length;
	db_addEditionComment(name,{"user": username, "text": text},n,callback);
	pr_editionsDict[name]["comments-list"][n] = {"user": username, "text": text};
}

function pr_deleteEditionComment(name,username,text,callback){
	var comments = pr_loadEditionComments(name);
	for(var i = 0; i < comments.length; i++){
		if(comments[i].user == username && comments[i].text == text){
			comments.splice(i,1);
			break;
		}
	}
	db_clearEditionComments(name);
	db_loadEditions(pr_editionsDict);
	setTimeout(function(){
	for(var i = 0; i < comments.length; i++){
		pr_addEditionComment(name,comments[i].user,comments[i].text);
	}
	db_loadEditions(pr_editionsDict,callback);
	},1000);
}

function pr_addEditionSectionCommentSpanComment(name,section,start,end,username,text,callback){
	section = section.toLowerCase();

	if(pr_editionsDict[name][section]["comment-spans-list"] == null){
		pr_editionsDict[name][section]["comment-spans-list"] = {};
	}
	if(pr_editionsDict[name][section]["comment-spans-list"][start+"-"+end] == null){
		pr_editionsDict[name][section]["comment-spans-list"][start+"-"+end] = {};
	}
	var commentSpan = pr_editionsDict[name][section]["comment-spans-list"][start+"-"+end];
	if(commentSpan["comments-list"] == null){
		commentSpan["comments-list"] = [];
	}
	var comments_list = commentSpan["comments-list"];
	comments_list[Object.keys(comments_list).length] = {"user": username, "text": text}; 
	
	var newCommentSpan = {
		"comments-list": comments_list,
		"start": start,
		"end": end
	};
	pr_editionsDict[name][section]["comment-spans-list"][start+"-"+end] = newCommentSpan;
	console.log(pr_editionsDict[name][section]["comment-spans-list"]);
	db_addEditionSectionComment(name,section,start,end,newCommentSpan,callback);
}

function pr_deleteEditionSectionCommentSpanComment(name,section,start,end,username,text,callback){
	section = section.toLowerCase();

	if(pr_editionsDict[name][section]["comment-spans-list"] == null) return;
	if(pr_editionsDict[name][section]["comment-spans-list"][start+"-"+end] == null) return;
	var commentSpan = pr_editionsDict[name][section]["comment-spans-list"][start+"-"+end];

	var comments = pr_loadComments(commentSpan);
	for(var i = 0; i < comments.length; i++){
		if(comments[i].user == username && comments[i].text == text){
			comments.splice(i,1);
			break;
		}
	}
	db_clearCommentSpanComments(name,section,start,end);
	db_loadEditions(pr_editionsDict);
	setTimeout(function(){
	for(var i = 0; i < comments.length; i++){
		pr_addEditionSectionCommentSpanComment(name,section,start,end,comments[i].user,comments[i].text);
	}
	db_loadEditions(pr_editionsDict,callback);
	},2000);
}

async function test(callback){
	pr_loadCategories(pr_categoriesDict);
	pr_loadGames(pr_gamesDict);
	pr_loadUsers(pr_usersDict);
	pr_loadEditions(pr_editionsDict,callback);
	console.log("finished loading")
}
