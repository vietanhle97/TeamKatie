var chatbox_username = "alalasld";
var chatbox_userImage = "alalasld";
function chatbox_insertChat(username,leftOrRight,text,userImage){

	var innerPlaceHolder = document.createElement('div')
	 if (leftOrRight.toLowerCase() == "left"){
        
        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
        				'<div class="avatar" style="padding:0px 10px 0px 0px !important"> <img style="height: 100%; width: 100%; object-fit: contain" src = "'+ userImage+ '"> </div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+username+'</small></p>' +
                            '</div>' +
                        '</div>' +
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
                  '</li>';
    }

    innerPlaceHolder.innerHTML = control;

	var chatBox = document.getElementById("myForm-chatField-chatList");

	console.log(chatBox,innerPlaceHolder);

	chatBox.append(innerPlaceHolder);
}
function chatbox_clearChat(){
	var chatBox = document.getElementById("myForm-chatField-chatList");
	while(chatBox.childNodes.length) chatBox.removeChild(chatBox.childNodes[0]);

}

document.getElementById("myForm-chatField-submitButton").onclick = function(){
	if($("#myForm-chatField-submitBox").val() != "")
	chatbox_insertChat(chatbox_username,"right",$("#myForm-chatField-submitBox").val(), chatbox_userImage);
	$("#myForm-chatField-submitBox").val("");
};

$("#myForm-chatField-submitBox").on("keyup", function(key){
	if(key.which == 13){
		$("#myForm-chatField-submitButton").click();
	}
});
