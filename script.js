var first = document.getElementById('first');
var last = document.getElementById('last');
var email = document.getElementById('email');
var pass = document.getElementById('password');
var Efirst = document.getElementById("fname");
var ELast = document.getElementById("lname");
var eAdd = document.getElementById("Ename");
var thePass = document.getElementById("Pname");
var img = document.getElementsByClassName('inp').style.backgroundImage = "url('images/icon-error.svg');";


function errorForm(){
    var valid = true;
    
    if (first.value === "" || first.value == null) {
        first.setAttribute('placeholder', '');
        valid = false;
        first.style.borderColor = "red";
        first.style.backgroundImage = 'url("images/icon-error.svg")';
        Efirst.innerHTML = "First Name cannot be empty";
    }
    if (last.value === "" || last.value == null) {
        last.setAttribute('placeholder', '');
        valid = false;
        last.style.borderColor = "red";
        last.style.backgroundImage = 'url("images/icon-error.svg")';
        ELast.innerHTML = "Last Name cannot be empty";
    }
    if (email.value === "" || email.value == null) {
        email.setAttribute('placeholder', '');
        valid = false;
        email.style.borderColor = "red";
        email.style.backgroundImage = 'url("images/icon-error.svg")';
        eAdd.innerHTML = "Email cannot be empty";
    } else if (!validEmail(email.value)){
        email.style.color = "red";
        email.style.fontWeight = "bold";
        valid = false;
        email.style.borderColor = "red";
        email.style.backgroundImage = 'url("images/icon-error.svg")';
        eAdd.innerHTML = "Not a real email";
    }
    if (pass.value === "" || pass.value == null) {
        pass.setAttribute('placeholder', '');
        valid = false;
        pass.style.borderColor = "red";
        pass.style.backgroundImage = 'url("images/icon-error.svg")';
        thePass.innerHTML = "Password cannot be empty";
    }
    return valid;
};

function validEmail(address){
    var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return pattern.test(address);
};



