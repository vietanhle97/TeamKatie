var currentUsername = sessionStorage.getItem('username');
if (currentUsername){
	console.log(currentUsername)
	var login_icon = document.getElementById('login_icon');
	if (login_icon){
		login_icon.style.display = 'none';
	}
	display_avatar();
}
function display_avatar(){
	var navbar_item = document.getElementById('navbar_item');
	var avatar = document.createElement('li');
	var img = document.createElement('img');
	img.id = 'avatar';
	img.src = "https://66.media.tumblr.com/7344adf8e9f50da39749ee5a276036a3/tumblr_plhy9hyJKE1wzh093o1_1280.jpg";
	img.style.width = '3em';
	img.style.height = '3em';
	img.addEventlistener('click', function(){
		logout();
	})
	var align = document.createElement('li');
	align.className = 'nav_item';
	var link = document.createElement('a')
	link.className = 'nav_link';
	link.href = '#';
	align.appendChild(link);
	avatar.appendChild(img);
	navbar_item.appendChild(avatar);
	navbar_item.appendChild(align);
}
