const API_DOMAIN = "https://2-dot-backup-server-001.appspot.com";
const MEMBER_INFORM_PATH = "/_api/v2/members/information";
var formInform = document.getElementById("form-inform");
var tokenKey = sessionStorage.getItem("McLaren");
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 201) {
            var responseObject = JSON.parse(this.responseText);
            console.log(this.responseText);
            alert(`Lấy thông tin thành công với người dùng có id là ${responseObject.id}`);
         if (responseObject.gender === 1){
             responseObject.gender = "Nam";
             formInform.innerHTML = `<div>
         <div>
           <img  src="${responseObject.avatar}" alt="">
</div>
         <div class="form-information">
         <div></div>
          <div class="form-Username">${responseObject.firstName} ${responseObject.lastName}</div>
          <div class="form-title">Email:</div>
          <div class="form-marrgin">${responseObject.email}</div>
          <div class="form-title">Phone:</div>
          <div class="form-marrgin">${responseObject.phone}</div>
          <div class="form-title">Address:</div>
          <div class="form-marrgin">${responseObject.address}</div>
          <div class="form-title">Gender:</div>
          <div class="form-marrgin">${responseObject.gender}</div>
          <div class="form-title">Birthday:</div>
          <div class="form-marrgin">${responseObject.birthday}</div>
</div>
</div>`
         }else {
             responseObject.gender = "Nữ";
             formInform.innerHTML = `<div>
         <div>
           <img  src="${responseObject.avatar}" alt="">
</div>
         <div class="form-information">
         <div></div>
          <div class="form-Username">${responseObject.firstName} ${responseObject.lastName}</div>
          <div class="form-title">Email:</div>
          <div class="form-marrgin">${responseObject.email}</div>
          <div class="form-title">Phone:</div>
          <div class="form-marrgin">${responseObject.phone}</div>
          <div class="form-title">Address:</div>
          <div class="form-marrgin">${responseObject.address}</div>
          <div class="form-title">Gender:</div>
          <div class="form-marrgin">${responseObject.gender}</div>
          <div class="form-title">Birthday:</div>
          <div class="form-marrgin">${responseObject.birthday}</div>
</div>
</div>`
         }
        }else {
            alert("Lấy thông tin người dùng thất bại")
        }
    }
}
xhr.open("GET", API_DOMAIN + MEMBER_INFORM_PATH);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", `Basic ${tokenKey}`);
xhr.send();
