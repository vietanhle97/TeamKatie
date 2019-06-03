var login_check = false;
ava_lis = ['https://scontent-lht6-1.cdninstagram.com/vp/d885c1202d9866ab0ef5e4fce08d22b4/5D66F107/t51.2885-15/e35/24175727_1774794099231774_3182683423328174080_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&ig_cache_key=MTY1ODAxMzA5MzczNDgzMjMyMw%3D%3D.2',
			'https://scontent-sea1-1.cdninstagram.com/vp/9aa631d27d409d2720abedbafa05f1f1/5D7CEBFB/t51.2885-15/e35/14052528_736984433109608_1710174119_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&ig_cache_key=MTMyNzU2MDgwMDM1NjgyODc1Mw%3D%3D.2',
			'https://pm1.narvii.com/6410/a6223f84f9ad51ad6ec9fff2a0362f6942e67600_hq.jpg',
			'https://scontent-atl3-1.cdninstagram.com/vp/635825950b7f42b1161b967082ddc92e/5D968427/t51.2885-15/e35/43985038_895295760859916_5344887389974058961_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com',
			'https://i.redd.it/w5x7h4os9sjy.jpg',
			'https://66.media.tumblr.com/7344adf8e9f50da39749ee5a276036a3/tumblr_plhy9hyJKE1wzh093o1_1280.jpg']
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function register(){
	var all_users = pr_loadUsersList();
	console.log(all_users);
	var username = document.getElementById("input_username").value;
	var password = document.getElementById("input_password").value;
	var confirm_password = document.getElementById('input_confirm_password').value;
	var year_playing = document.getElementById('year_playing').value;
	var img_url = ava_lis[randomInt(0, ava_lis.length)];
	if(!username || !password || !confirm_password || year_playing == 'none'){
		alert("Please fill in all required fields")
	}
	else if (password != confirm_password){
		document.getElementById('input_confirm_password').value = '';
		alert("Please confirm your password again");
	}
	else if (all_users.includes(username)){
		document.getElementById("username").value = '';
		alert('This user name is already existed. Please choose another name.')
	}
	else{
		console.log(year_playing)
		pr_addNewUser(username, password, year_playing, img_url)
		document.getElementById('input_username').value = '';
		document.getElementById('input_password').value = '';
		document.getElementById('input_confirm_password').value = '';
		sessionStorage.setItem('username', username);
		alert("Thank you for signing up")
		window.location = "main.html";
	}
}