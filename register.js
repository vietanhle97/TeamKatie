var login_check = false;
function register(){
	var all_users = pr_loadUsersList();
	console.log(all_users);
	var username = document.getElementById("input_username").value;
	var password = document.getElementById("input_password").value;
	var confirm_password = document.getElementById('input_confirm_password').value;
	if(!username || !password || !confirm_password || !year_playing == 'none'){
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
		pr_addNewUser(username, password, year_playing)
		document.getElementById('input_username').value = '';
		document.getElementById('input_password').value = '';
		document.getElementById('input_confirm_password').value = '';
		sessionStorage.setItem('username', username);
		alert("Thank you for signing up")
		window.location = "main.html";
	}
}