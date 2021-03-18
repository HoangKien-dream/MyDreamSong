const API_DOMAIN = "https://2-dot-backup-server-001.appspot.com";
const LOGIN_PATH = "/_api/v2/members/authentication";
var formLogin = document.forms["form-login"];
var txtEmail = formLogin["email"];
var pswPassword = formLogin["password"];
var btnSubmit = formLogin["button"];
btnSubmit.onclick = function () {
    var email = txtEmail.value;
    var password = pswPassword.value;
    var sendData = {
        email: email,
        password: password
    }
    var jsonData = JSON.stringify(sendData);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 201) {
                var responseObject = JSON.parse(this.responseText);
                var tokenKey = sessionStorage.setItem("McLaren", responseObject.token);
                console.log(this.responseText);
                alert(`Login thành công với Token là ${responseObject.token}`);
                window.location.assign("getLatestSong.html");
            } else {
                alert("Login thất bại");
            }
        }
    }
    xhr.open("POST", API_DOMAIN + LOGIN_PATH);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(jsonData);
}