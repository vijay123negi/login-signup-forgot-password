let user = [];

let form = document.getElementById('signupForm');

form.addEventListener('submit', function submitForm(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    let obj = {username,email,password};
    user.push(obj);
    localStorage.setItem('users', JSON.stringify(user));
    alert('Signup successful!\nUsername: ' + username + '\nEmail: ' + email);
})

let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', () => {
    window.location.href = "./login.html";
})