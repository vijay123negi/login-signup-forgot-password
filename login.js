let users = JSON.parse(localStorage.getItem('users')) || [];

let loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(!email || !password) {
        alert('Please enter both email and password');
        return;
    }

   let user =  users.find((item) => item.email === email);
   if (user){
    if (user.password=== password){
        window.location.href = "./profile.html";
    }else{
        alert("wrong password try again")
    }
   }else{
    alert('plese register yourself first');
   }
})
document.getElementById('forgotPasswordLink').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "./resetpassword.html";
   })