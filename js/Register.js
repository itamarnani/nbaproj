function IsValid() {
    return (IsValidname() && IsValidusername()&&IsValidpassword() && IsValidconfirmpassword() && IsValidemailaddress()  && IsValidlocation() && IsValidgender()) ;
}
function IsValidname() {//בדיקת שם
    var v = document.getElementById("fullname").value;
    if (v == "") {
        document.getElementById("lable1").innerHTML = "Enter  name";
        return false;
    }
    document.getElementById("lable1").innerHTML = "";
    return true;
}
function IsValidusername() {//בדיקת שם משתמש
    var v = document.getElementById("username").value;
    if (v == "") {
        document.getElementById("lable2").innerHTML = "Enter  name";
        return false;
    }
    document.getElementById("lable2").innerHTML = "";
    return true;
}

function IsValidpassword() {//בדיקת סיסמא
    var v = document.getElementById("password_signup").value;
    if (v == "") {
        document.getElementById("lable3").innerHTML = "Enter password";
        return false;
    }
    var strength = 0;
    if (v.match(/[a-z]+/)) {
        strength += 1;
    }
    if (v.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (v.match(/[0-9]+/)) {
        strength += 1;
    }
    if (v.length < 8) {
        document.getElementById("lable3").innerHTML = "Password must contain at least 8 characters";
        return false;
    }
    if (strength < 3) {
        document.getElementById("lable3").innerHTML = "Password must contain uppercase letter, lowercase letter and numbers";
        return false;
    }
    document.getElementById("lable3").innerHTML = "";
    return true;
}
function IsValidconfirmpassword() {//check confirm password
    var password = document.getElementById("password_signup").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
        document.getElementById("lable4").innerHTML = "Passwords do not match";
        return false;
    }

    document.getElementById("lable4").innerHTML = "";
    return true;
}


function IsValidemailaddress() {//בדיקת אימייל
    var v = document.getElementById("email").value;
    if (v == "") {
        document.getElementById("lable5").innerHTML = "Enter email address";
        return false;
    }
    var specialChar = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!(v.match(specialChar))) {
        document.getElementById("lable5").innerHTML = "Enter a valid email address";
        return false;
    }
    document.getElementById("lable5").innerHTML = "";
    return true;
}

function IsValidlocation() {
    var v = document.getElementById("location");
    var options = locationElement.options;

    for (var i = 0; i < options.length; i++) {
        if (options[i].selected) {
            window.alert(options[i].value);
        }
    }
}
function IsValidgender() {
    var genderElements = document.getElementsByName("gender");

    for (var i = 0; i <v.length; i++) {
        if (gender_v[i].checked==true) {
            v = gender_v[i].value;
            if (v == null) {
                document.getElementById("lable7").innerHTML = "you must pick a gender";
                return false;
            }
            else {
                document.getElementById("lable7").innerHTML = "";
                return true;
            }
        }
    }   
}


//function IsValiddateofbirth1() {
//    var v = document.getElementById("dateofbirth1").value;
//    var v1 = new Date(v);
//    if (v1 == v1.toLocaleDateString()) {
//        document.getElementById("lable10").innerHTML = "Enter date of birth";
//        return false;
//    }
//    document.getElementById("lable10").innerHTML = "";
//    return true;
