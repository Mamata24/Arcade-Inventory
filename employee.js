employees = {};

function addNewuser() {
	event.preventDefault();

	var firstName = document.getElementById("inputFirst").value;
	var lastName = document.getElementById("inputLast").value;
	var email = document.getElementById("inputEmail4").value;
	var password = document.getElementById("inputPassword4").value;
	var address = document.getElementById("inputAddress").value;
	var address2 = document.getElementById("inputAddress2").value;
	var city = document.getElementById("inputCity").value;
	var state = document.getElementById("inputState").value;
	var zipCode = document.getElementById("inputZip").value;

	employees["FirstName"] = firstName;
	employees["lastName"] = lastName;
	employees["email"] = email;
	employees["password"] = password;
	employees["address"] = address;
	employees["address2"] = address2;
	// employees["mobile"] = newmobile;
	employees["city"] = city;
	employees["state"] = state;
	employees["newZip"] = zipCode;
	console.log(employees);
	let append;

	if (localStorage.getItem("append") === null) {
		append = [];
	} else {
		append = JSON.parse(localStorage.getItem("append"));
	}

	append.push(employees);

	localStorage.setItem("append", JSON.stringify(append));

	console.log(append);

	renderDetails(employees);
}

function renderDetails(data) {
	var registerBox = document.getElementById("registerBox");
	var result = document.getElementById("result");
	var outerBox = document.createElement("div");

	var thankyou = document.createElement("h2");
	var welcome = document.createElement("h2");
	// var address= document.createElement
	thankyou.textContent = "Employee Successfully Added";

	welcome.textContent = "Welcome " + data.FirstName + " in our family";
	var para = document.createElement("p");
	para.textContent = "Below are the details:";

	var username = document.createElement("p");
	var addressP = document.createElement("p");
	var cityP = document.createElement("p");
	var emailP = document.createElement("p");
	var mobileP = document.createElement("p");
	var zipP = document.createElement("p");
	var stateP = document.createElement("p");

	console.log(thankyou, data);
	result.append(thankyou, welcome);

	username.textContent = "Name : " + data.FirstName;
	addressP.textContent = "Address : " + data.address + " " + data.address2;
	cityP.textContent = "City : " + data.city;
	emailP.textContent = "Email : " + data.email;
	// mobileP.textContent = "Mobile :" + data.mobile;
	zipP.textContent = "Zip code :" + data.newZip;
	stateP.textContent = "State :" + data.state;

	outerBox.append(username, emailP, addressP, cityP, stateP, zipP);
	// outerBox.style.marginLeft = "15%";
	registerBox.remove();
	result.append(outerBox);
}

window.addEventListener("load", function () {
	var addUser = document.getElementById("addNew");
	addUser.addEventListener("click", addNewuser);
});
