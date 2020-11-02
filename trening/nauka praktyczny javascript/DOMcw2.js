function checkpassword() {
    let password = document.getElementById('password').value; 
    let rpassowrd = document.getElementById('rpassword').value;
    if (password == '' || rpassowrd == '') {
        alert('Wpisz hasło!');
    }
    else if (password == rpassowrd) {
        alert('OK');
    }
    else  {
        alert('hasła są różne');
    }
}

