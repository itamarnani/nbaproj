
function isloginUsernamevalid() {
    var y = document.getElementById("username").value;
    if (y == "") {
        document.getElementById("labelusername").innerHTML = "pls enter user name";
    }
}

function isloginpasswordvalid() {
    var y = document.getElementById("password").value;
    if (y == "") {
        document.getElementById("labelpass").innerHTML = "pls enter password";
    }
}