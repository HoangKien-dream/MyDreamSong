const API_DOMAIN = "https://2-dot-backup-server-001.appspot.com";
const REGISTER_PATH = "/_api/v2/members";
var registerForm = document.forms["register-form"];
var btnsubmit = registerForm["button"];
var txtMsgError = document.getElementById("msgError");
var txtFirtsName = registerForm["firtsName"];
var txtLastName = registerForm["lastName"];
var pwdPassword = registerForm["password"];
var pwdConfirmPassword = registerForm["confirmPassword"];
var txtAddress = registerForm["address"];
var txtPhone = registerForm["phone"];
var txtAvatar = registerForm["avatar"];
var selecGender = registerForm["gender"];
var txtEmail = registerForm["email"];
var txtBirthday = registerForm["birthday"];
btnsubmit.onclick = function () {
    var firtsName = txtFirtsName.value;
    var lastName = txtLastName.value;
    var password = pwdPassword.value;
    var confirmPassword = pwdConfirmPassword.value;
    var address = txtAddress.value;
    var phone = txtPhone.value;
    var avatar = txtAvatar.value;
    var gender = selecGender.value;
    var email = txtEmail.value;
    var birthday = txtBirthday.value;
    if (password === confirmPassword) {
        var sendData = {
            firstName: firtsName,
            lastName: lastName,
            password: password,
            address: address,
            phone: phone,
            avatar: avatar,
            gender: gender,
            email: email,
            birthday: birthday
        }
        txtMsgError.innerHTML = "";
    } else {
        txtMsgError.innerHTML = "Mật khẩu không trùng khớp vui lòng nhập lại";
    }
    var jsonData = JSON.stringify(sendData);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 201) {
                console.log(this.responseText);
                var responseObject = JSON.parse(this.responseText);
                window.location.assign("login.html")
                alert(`Đăng kí thành công tài khoản có id ${responseObject.id}`);
            } else {
                alert("Vui lòng thử lại sau");
            }
        }
    }
    xhr.open("POST", `${API_DOMAIN}${REGISTER_PATH}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(jsonData);
}