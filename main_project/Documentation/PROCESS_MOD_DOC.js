//object Span object
var span_object = {"start": integer,
			"end": integer,
			"comment-list": list[Comment_object]};

//object Comment object
var comment_object = {	"user": string,
						"text": string};








//string -> string
//take a game name, return image of the game

function pr_loadGameImage(name);

//string -> string
//take a game name, return list of categories of the game

function pr_loadGameCategoriesList(name);







//string -> string
//take a category name, return image of the category
function pr_loadCategoryImage(name);

//string -> list[string]
//take a category name, return list of the games in that category
function pr_loadCategoryGamesList(name);




//string -> string
//take a edition name, return image of the edition

function pr_loadEditionImage(name);

//string string -> string
//take a edition name and section name, return text of section of the game

function pr_loadEditionSectionText(name,sectionName);

//string string -> list[span_object];
//input a edition section, return span inside that section
function pr_loadEditionSectionCommentSpans(name,sectionName){

//span_object -> list[comment_object]
//input a span, return comment inside that span
function pr_loadComments(commentSpan);


//string string string
//Add a comment into an edition
function pr_addEditionComment(name,username,text);

//string string integer integer string string
//Add a comment into a span inside a section of edition
function pr_addEditionSectionCommentSpan(name,section,start,end,username,text);

