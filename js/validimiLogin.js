function validimiLogin() {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);

    if (username.trim() === '') {
        alert('Please enter your username');
        return false;
    }

    if (password.trim() === '') {
        alert('Please enter your password');
        return false;
    }

    return true;
}
