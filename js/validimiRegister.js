function validimiRegister() {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirm-email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Confirm Email:', confirmEmail);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    if (username.trim() === '') {
        alert('Please enter your username');
        return false;
    }

    if (email.trim() === '') {
        alert('Please enter your email');
        return false;
    }

    if (confirmEmail.trim() === '') {
        alert('Please confirm your email');
        return false;
    }

    if (password.trim() === '') {
        alert('Please enter your password');
        return false;
    }

    if (confirmPassword.trim() === '') {
        alert('Please confirm your password');
        return false;
    }

    return true;
}
