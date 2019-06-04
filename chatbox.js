var chatbox_username = "alalasld";
var chatbox_userImage = "alalasld";
var chatbox_currentSpan = {"section": "main", "start": null, "end": null};

function chatbox_insertChat(editionName,username,leftOrRight,text,userImage){

	var innerPlaceHolder = document.createElement('div')
	 if (leftOrRight.toLowerCase() == "left"){
    	var confirmText = "You are trying to report this content. Make sure the comment is violating our policy because: \\n"+ 
    						" - It is a spam\\n - It is a personal attack\\n - It contains illegal content\\n";        
        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
        				'<div class="avatar" style="padding:0px 10px 0px 0px !important"> <img style="height: 100%; width: 100%; object-fit: contain" src = "'+ userImage+ '"> </div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+username+'</small></p>' +
                            '</div>' +
                        '</div>' +
                        `<img `+ `class = "btn-light" onclick = "var r = confirm('`+ confirmText +`');` 
                        + `if(r == 1) setTimeout(function(){alert('I have received your report.\\nThank you for helping our community!');},700);` + `"`+
                  		`style="margin-top:10px; height: 15px; width: 15px; object-fit: contain"` + 
                  		`src = "https://static.thenounproject.com/png/12093-200.png">` +
                    '</li>';                    
    }else{
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p>'+text+'</p>' +
                                '<p><small>'+username+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"> <img style="height: 100%; width: 100%; object-fit: contain" src = "'+ userImage+ '"> </div>' +  
                        '</div>' +
                        `<img `+ `class = "btn-light" onclick = "this.src = 'https://cdn2.iconfinder.com/data/icons/medicine-7/512/sand_glass-2-512.png';` + 
                        `var par = this.parentNode; setTimeout(function(){par.style.display = 'none'},1500);` +` chatbox_deleteComment('`+ editionName + `','`
                         + chatbox_currentSpan["section"] + `','` + chatbox_currentSpan["start"] + `','`+ chatbox_currentSpan["end"] + `','` + username + `','` + text + `',`+  
                         `function(){component_spanListUpdate('`+ chatbox_currentSpan["section"] + `'); component_reloadSpan();}` + `)"` +
                        `style="margin-top:10px; height: 15px; width: 15px; object-fit: contain" src = "https://cdn1.iconfinder.com/data/icons/business-office-and-internet-7/50/46-512.png">` +                                                          
                  '</li>';
    }

    innerPlaceHolder.innerHTML = control;

	var chatBox = document.getElementById("myForm-chatField-chatList");


	chatBox.append(innerPlaceHolder);
}
function chatbox_userInsertChat(editionName,username,leftOrRight,text,userImage, callback){
	if(chatbox_currentSpan["section"] == "main"){
		pr_addEditionComment(editionName,username,text,callback);
	}
	else {
		pr_addEditionSectionCommentSpanComment(editionName,chatbox_currentSpan["section"],
			chatbox_currentSpan["start"],chatbox_currentSpan["end"],username,text,callback);
	}
	chatbox_insertChat(editionName,username,leftOrRight,text,userImage);
}
function chatbox_deleteComment(editionName,section,start,end,username,text, callback){
	if(section != "main"){
		pr_deleteEditionSectionCommentSpanComment(editionName,section,start,end,username,text, callback);
	}
	else{
		pr_deleteEditionComment(editionName,username,text, callback);
	}
}
function chatbox_clearChat(){
	var chatBox = document.getElementById("myForm-chatField-chatList");
	while(chatBox.childNodes.length) chatBox.removeChild(chatBox.childNodes[0]);

}

document.getElementById("myForm-chatField-submitButton").onclick = function(){
	if($("#myForm-chatField-submitBox").val() != "")
	chatbox_userInsertChat(sessionStorage.getItem('edition'),chatbox_username,"right",$("#myForm-chatField-submitBox").val(), chatbox_userImage,function(){
  			component_spanListUpdate(chatbox_currentSpan["section"]);
    });
	$("#myForm-chatField-submitBox").val("");
};

$("#myForm-chatField-submitBox").on("keyup", function(key){
	if(key.which == 13){
		$("#myForm-chatField-submitButton").click();
	}
});
