var name1 = ["sampleuser", "sampleUser2", "Bharat", "Manoj"];
var pass = ["123456", "sample", "@bharat", "@manoj"];
var obj = {};
// var registerbtn = document.getElementById("registerlink");
var loginBtn = document.getElementById("loginlink");

loginBtn.addEventListener("click", toggle);

// registerbtn.addEventListener("click", toggle);

function toggle() {
	var register = document.querySelector(".register-form");
	var login = document.querySelector(".login-form");
	register.classList.toggle("show");
	login.classList.toggle("show");
}
//login form
document.getElementById("loginbtn").addEventListener("click", function (event) {
	event.preventDefault();
	var username, password, user;
	username = document.getElementById("username");
	password = document.getElementById("password");

	var user = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	for (var i = 0; i < 4; i++) {
		// console.log(name1[i])
		if (user == name1[i] && password == pass[i]) {
			// wrong = false;

			obj["user"] = name1[i];
			let date = new Date();
			localStorage.setItem("time", date.toLocaleTimeString());
			// obj["time"] = time;

			// append_local(name1[i], time);

			localStorage.setItem("User", JSON.stringify(obj));
			location.href = "user_page.html";

			// dash_page()
		} else if (user == "admin" && password == "admin") {
			// wrong = false;
			let date = new Date();
			localStorage.setItem("time", date.toLocaleTimeString());
			location.href = "admin_page.html";
		}
	}

	user = JSON.parse(localStorage.getItem([username.value]));
	if (user) {
		console.log(user.password, password.value);
		if (user["password"] === password.value) {
			alert("Login Successful");
			window.localStorage.setItem("user", username.value);
			window.location.href = "./user.html";
		} else {
			alert("Incorrect Password");
		}
	}
});
// document.getElementById("registerbtn").addEventListener("click", function (event) {
// 	event.preventDefault();
// 	var email,
// 		username,
// 		password,
// 		cnfpassword,
// 		arr,
// 		email = document.getElementById("email");
// 	username = document.getElementById("username");
// 	password = document.getElementById("password");
// 	cnfpassword = document.getElementById("cnfpassword");
// 	if (localStorage.getItem([username.value])) {
// 		alert("Username already exist");
// 	} else if (password.value === cnfpassword.value) {
// 		arr = {
// 			email: email.value,
// 			username: username.value,
// 			password: password.value,
// 		};
// 		arr = JSON.stringify(arr);
// 		localStorage.setItem([username.value], arr);
// 		clearfields(email, username, password, cnfpassword);
// 		alert("New user Created");
// 	} else {
// 		alert("Password and confirm password doesnt match");
// 	}
// });
function clearfields(email, username, password, cnfpassword) {
	email.value = "";
	username.value = "";
	password.value = "";
	cnfpassword.value = "";
}
