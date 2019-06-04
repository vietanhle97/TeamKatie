var currentUsername = sessionStorage.getItem('username');
var currentUserImage = sessionStorage.getItem('avatar');
var currentUserExperience = sessionStorage.getItem('experience')
var login_check = false;
function load_ava(){
	$("#password").keydown(function(e){
		console.log("aa",e.keycode,);
		if(e.keyCode == 13){
			$("#loginbutton").click();
		}
	})
	if (currentUsername){
		login_check = true;
		// console.log(currentUsername)
		var login_icon = document.getElementById('login_icon');
		if (login_icon){
			login_icon.style.display = 'none';
		}
		display_avatar();
	}
	else{
		$('#screen').click(function(event) {
			if(!$(event.target).is('#check_login') & !$(event.target).is('#katie_logo')){
				window.location = 'main.html#'
				var loginClick = confirm('Please Login First');
				if(loginClick == 1)
					$('#check_login').click();

			}
		})
	}
	function main_page(){
		var logo = document.getElementById('logo');
		logo.href = 'main.html';
	}
}

function display_avatar(){
	var navbar_item = document.getElementById('navbar_item');
	var avatar = document.createElement('li');
	var drop_down = document.createElement('div')
	var profile_card = document.getElementById('profile_card');
	drop_down.className = 'drop_down';
	var ava_img = document.createElement('img');
	ava_img.src = currentUserImage;
	ava_img.id = 'avatar';
	ava_img.style.width = '3em';
	ava_img.style.height = '3em';
	var profile_card = document.getElementById('profile_card');
	var card_img = document.createElement('img');
	card_img.id = 'card_avatar';
	card_img.src =  ava_img.src;
	var card_name = document.createElement('h5');
	var experience = currentUserExperience;
	var year = document.createElement('h5');
	profile_card.appendChild(card_img);
	card_name.appendChild(document.createTextNode('Player: '+ currentUsername));
	profile_card.appendChild(card_name);
	year.appendChild(document.createTextNode('Experience: ' + experience));
	profile_card.appendChild(year);
	var row = document.createElement('div');
	row.className = 'row';
	var col_1 = document.createElement('div');
	col_1.className = 'col-5';

	var col_2 = document.createElement('div');
	col_2.className = 'col-7'

	var logout_button = document.createElement('button');
	logout_button.className = 'btn btn-light';
	logout_button.id = 'logout_button';
	logout_button.appendChild(document.createTextNode('Logout'));
	logout_button.addEventListener('click', function(){
		logout();
	})
	col_1.appendChild(logout_button)

	var switch_button = document.createElement('button');
	switch_button.className = 'btn btn-light';
	switch_button.id = 'switch_button';
	switch_button.appendChild(document.createTextNode('Switch Account'));
	switch_button.addEventListener('click', function(){
		document.getElementById('id01').style.display = 'block';
		document.getElementById('profile_card').style.display = 'none'
	})
	col_2.appendChild(switch_button)

	row.appendChild(col_1);
	row.appendChild(col_2);

	profile_card.appendChild(row);
	var count = 1;
	ava_img.addEventListener('click', function(){
		document.getElementById('id01').style.display = 'none';
		if(count == 1){
			document.getElementById('profile_card').style.display = 'block';
			count = 2;
		}
		else{
			document.getElementById('profile_card').style.display = 'none';
			count = 1;
		}
		$('body').click(function(event){
			if(!$(event.target).is('#avatar')){
				document.getElementById('profile_card').style.display = 'none';
				count = 1;
			}
		})
	})
	var align = document.createElement('li');
	align.className = 'nav_item';
	var link = document.createElement('a')
	link.className = 'nav_link';
	link.href = '#';
	align.appendChild(link);
	drop_down.appendChild(ava_img);
	avatar.appendChild(drop_down);
	navbar_item.appendChild(avatar);
	navbar_item.appendChild(align);
}
function logout(){
	window.location.replace("main.html");
	sessionStorage.clear();
}

function add_to_banner(category, img_url){
	var banner = document.getElementById("banner");
	var link = document.createElement('a');
	link.setAttribute('href','');
	link.className = 'category';
	link.id = category;
	var img = document.createElement('img');
	img.className = "shadow";
	img.style = "border-radius: 25px; width: 128px; height: 128px; over-fit: contain;"
	img.style.backgroundColor = 'transparent';
	img.setAttribute('src', img_url);
	var span = document.createElement('span');
	span.className = 'caption';
	span.appendChild(document.createTextNode(category));
	link.appendChild(img);
	link.appendChild(span);
	banner.appendChild(link);
}

function display_category(){
	var categories = pr_loadAllCategories();
	for(i=0;i<categories.length;i++){
		var img = pr_loadCategoryImage(categories[i]);
		var category = categories[i]
		add_to_banner(category, img);
		change(category);
	}
	for (i=0;i<6;i++){
		add_to_banner("Unavailable", "data:image/jpeg;base64,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");    

	}
}


function change(i){
		var category = document.getElementById(i);
		if (login_check == true){
			category.addEventListener("mousedown", function(){
				category.href = 'category.html'
				sessionStorage.setItem("category",category.id);
				return (category.id);
			})
		}
		else{
			category.href = '#';
		}
}
function load_page(){
	load_ava();
	display_category();
}
test(load_page)

setTimeout(function() {
    $('#progressBar').css('width', '25%');
    setTimeout(function() {
        $('#progressBar').css('width', '50%');
        setTimeout(function() {
            $('#progressBar').css('width', '75%');
            setTimeout(function(){
            	$('#progressBar').css('width', '100%');
            	setTimeout(function(){
            		$('.progress').css('display', 'none');
            	}, 300)	
            }, 200)
        }, 200); 
    }, 200); 
}, 200);
