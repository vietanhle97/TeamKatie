var login_check = false;
function register(){
	var all_users = pr_loadUsersList();
	console.log(all_users);
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var confirm_password = document.getElementById('confirm_password').value;
	var year_playing = document.getElementById('year_playing').value;
	if(!username || !password || !confirm_password || year_playing == 'none'){
		alert("Please fill in all required fields")
	}
	else if (password != confirm_password){
		document.getElementById('confirm_password').value = '';
		alert("Please confirm your password again");
	}
	else if (all_users.includes(username)){
		document.getElementById("username").value = '';
		alert('This user name is already existed. Please choose another name.')
	}
	else{
		pr_addNewUser(username, password, year_playing)
		document.getElementById('username').value = '';
		document.getElementById('password').value = '';
		document.getElementById('confirm_password').value = '';
		sessionStorage.setItem('username', username);
		alert("Thank you for signing up")
		window.location = "main.html";
	}
}