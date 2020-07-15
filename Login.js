var registerbtn = document.getElementById('registerlink');
var loginBtn = document.getElementById('loginlink')

loginBtn.addEventListener('click', toggle)

registerbtn.addEventListener('click', toggle)

function toggle() {
    var register = document.querySelector('.register-form');
    var login = document.querySelector('.login-form')
    register.classList.toggle('show')
    login.classList.toggle('show')
}
//login form
document.getElementById('loginbtn').addEventListener('click', function (event) {
    event.preventDefault()
    var username, password, user
    username = document.getElementById('username')
    password = document.getElementById('password')
    user = JSON.parse(localStorage.getItem([username.value]))
    if (user) {
        console.log(user.password, password.value)
        if (user["password"] === password.value) {
            alert("Login Successful")
            window.localStorage.setItem('user', username.value)
            window.location.href = './user.html'
        }
        else {
            alert('Incorrect Password')
        }
    }
})
document.getElementById('registerbtn').addEventListener('click', function (event) {
    event.preventDefault()
    var email, username, password, cnfpassword, arr,
        email = document.getElementById('email')
    username = document.getElementById('username')
    password = document.getElementById('password')
    cnfpassword = document.getElementById('cnfpassword')
    if (localStorage.getItem([username.value])) {
        alert('Username already exist')
    }
    else if (password.value === cnfpassword.value) {
        arr = {
            email: email.value,
            username: username.value,
            password: password.value,
        };
        arr = JSON.stringify(arr)
        localStorage.setItem([username.value], arr)
        clearfields(email, username, password, cnfpassword)
        alert("New user Created")
    }
    else {
        alert("Password and confirm password doesnt match")
    }
})
function clearfields(email, username, password, cnfpassword) {
    email.value = ''
    username.value = ''
    password.value = ''
    cnfpassword.value = ''

}

