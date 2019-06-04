var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function cancel_login(){
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	username.value = '';
	password.value = '';
	document.getElementById('id01').style.display='none';
}

function login(){
	var all_users = pr_loadUsersList();
	console.log(all_users);
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	console.log(username)
	if (!username){
		alert("Please enter your Username and Password");
	}
	else if (all_users.includes(username)){
		var user_info = pr_loadUserInfo(username);
		if (password == user_info['password']){
			sessionStorage.setItem('username', username)
			sessionStorage.setItem('experience', user_info['Experience']);
			sessionStorage.setItem('img-url', user_info['img-url']);
			document.getElementById('id01').style.display = 'none';
			window.location = 'main.html';
		}
		else{
			console.log('wrong');
			alert("You have entered wrong Password. Please try again");
		}
	}
	else{
		alert("Your Username did not exist. Please click Sign Up to register");
		
	}
}
function register(){
	var register = document.getElementById('signup_button');
	window.location = 'register.html'
}