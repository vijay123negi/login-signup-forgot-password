document.getElementById('resetPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var newPassword = document.getElementById('newPassword').value;
    var email = document.getElementById('email').value;
    console.log(newPassword);
    updatePassword(email, newPassword);
    window.location.href = "./login.html";
})

function updatePassword(email, newPassword) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var userToUpdate = users.find(function (user) {
        return user.email === email;
    })
    if(userToUpdate) {
        userToUpdate.password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Password reset successfully');
    }else {
        alert('user not found, Password reset is failed');
    }
}