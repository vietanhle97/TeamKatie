var login_check = false;
ava_lis = ['https://scontent-lht6-1.cdninstagram.com/vp/d885c1202d9866ab0ef5e4fce08d22b4/5D66F107/t51.2885-15/e35/24175727_1774794099231774_3182683423328174080_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&ig_cache_key=MTY1ODAxMzA5MzczNDgzMjMyMw%3D%3D.2',
			'https://scontent-lga3-1.cdninstagram.com/vp/f249969ecc9f72f934effb88a61d8cd4/5D7A1902/t51.2885-15/e35/50223153_237713750437927_7438909143057951131_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com',
			'https://pm1.narvii.com/6410/a6223f84f9ad51ad6ec9fff2a0362f6942e67600_hq.jpg',
			'https://scontent-atl3-1.cdninstagram.com/vp/635825950b7f42b1161b967082ddc92e/5D968427/t51.2885-15/e35/43985038_895295760859916_5344887389974058961_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com',
			'https://i.redd.it/w5x7h4os9sjy.jpg',
			"https://i.pinimg.com/564x/2a/9a/29/2a9a29a197ba37b770b8207fc2540e2d.jpg",
			"https://i.pinimg.com/564x/96/e8/84/96e8844f500b9f133a4b4d42484942c7.jpg",
			'https://scontent-lhr3-1.cdninstagram.com/vp/bf5f889d678228c5a3669b3890d503a5/5D7AA675/t51.2885-15/e35/24126806_1560224670720161_7922044336835919872_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&ig_cache_key=MTY1ODMwMTM4NDMzODE3MTU2OQ%3D%3D.2',
			'https://scontent-lhr3-1.cdninstagram.com/vp/9399e41625a2326f8358cb92f1f08c94/5D520013/t51.2885-15/e35/53347733_2166980153613297_5851049943844246020_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&ig_cache_key=MjAwNTE4OTczNTc3MzI5NTUzOQ%3D%3D.2',
			'https://scontent-atl3-1.cdninstagram.com/vp/40fb586684f0797acb78af40d2d5cfb1/5D9F343B/t51.2885-15/e35/46848673_567897806970580_8848727644232481151_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com',
			'https://scontent-yyz1-1.cdninstagram.com/vp/996d2ae0fe5dd34895b4db8d5a7f9ef4/5D7AA675/t51.2885-15/e35/24126806_1560224670720161_7922044336835919872_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
			'https://pm1.narvii.com/6414/ee72edebfd3ecd43c9f958c70fdb6c969ea3ebe6_hq.jpg',
			'https://scontent-sea1-1.cdninstagram.com/vp/f8ccb0add794e33fd0db643226eeb332/5D4F21D0/t51.2885-15/e35/54447027_616638618844524_5759536288980526313_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com',
			'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdbf8569-038b-4808-812c-ad550910d14f/dcl5yab-ee25d40b-9b62-42f1-989a-59705dae38ab.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYmY4NTY5LTAzOGItNDgwOC04MTJjLWFkNTUwOTEwZDE0ZlwvZGNsNXlhYi1lZTI1ZDQwYi05YjYyLTQyZjEtOTg5YS01OTcwNWRhZTM4YWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sYsXkz5-EU3xMNUDRFBDEYoXUpjoeU9ALZi8pjiNmKo',
			'https://scontent-iad3-1.cdninstagram.com/vp/3c3efb485688b49a35d69498e10b2b6f/5D631280/t51.2885-15/e35/53628993_726598024408749_1664567611350520625_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com',
			'https://scontent-ams3-1.cdninstagram.com/vp/53e656674734939d04ca4573e8c40b6e/5D6A9AB9/t51.2885-15/e35/43913092_1023314997870677_6266047414535566170_n.jpg?_nc_ht=scontent-ams3-1.cdninstagram.com',
			'https://2.bp.blogspot.com/-_hVEx9KiWAo/WBCFpNpxAJI/AAAAAAAAAQU/H9q5NSt5SkoAT7x2W-lboKzLgh6BKXfZwCLcB/s1600/1477477657.png',
			'https://pm1.narvii.com/6392/84cea38ddfa750445e1e7fd0168ba8b90a790128_hq.jpg',
			'https://scontent-iad3-1.cdninstagram.com/vp/f8b73a34d17a81b3aed4b51356f99745/5D617A11/t51.2885-15/e35/22158985_1548132278598653_7218105673832202240_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com',
			'https://scontent-lga3-1.cdninstagram.com/vp/86c4b9ae924ca1a31c5f4552fdc31d4e/5D513EA4/t51.2885-15/e35/12519447_270226099981129_260954868_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com',
			'https://i.pinimg.com/originals/f1/0a/8c/f10a8c85811c25071aa194d3ae8d0a6f.jpg',
			'https://pbs.twimg.com/media/CvyMQTFUAAEaXET.jpg:large',
			'https://scontent-lga3-1.cdninstagram.com/vp/d9b40927c66a6c12de06e835d4f6befc/5D1E1381/t51.2885-15/e35/40438235_284418142280975_6618751006864012277_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com',
			'https://4.bp.blogspot.com/-zho5n5O5wpA/WFXG-SimMrI/AAAAAAAAMuU/4d1liShvRgk0z36rm9-lMwoS77tYJgBmgCKgB/s1600/1481636774.png',
			'https://pbs.twimg.com/media/C0-RzaSW8AAUH81.jpg',
			'https://pm1.narvii.com/6422/072b65c516eb88164537a396061823cbf1b2b3d3_hq.jpg',
			'https://pbs.twimg.com/media/DoCQ4vQXUAAwl54.jpg']
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
		var user_info = {'username': username, 'experience': year_playing, 'img-url':img_url}
		sessionStorage.setItem('UserInfo', user_info);
		sessionStorage.setItem('username', username);
		sessionStorage.setItem('img-url', img_url);
		sessionStorage.setItem('experience', year_playing);
		alert("Thank you for signing up")
		window.location = "main.html";
	}
}