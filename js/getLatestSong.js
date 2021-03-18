const API_DOMAIN = "https://2-dot-backup-server-001.appspot.com";
const GET_LATEST_PATH = "/_api/v2/songs";
var tokenKey = sessionStorage.getItem("McLaren");
var formMusic = document.getElementById("form-music");
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
            var responseObject = JSON.parse(this.responseText);
            console.log(this.responseText);
            alert("Lấy thông tin bài hát thành công");
            for (var i = 0; i < 9; i++) {
                formMusic.innerHTML += `
                <div class="form-layout">
                  <div class="title">${responseObject[i].name}</div>
                  <img  src="${responseObject[i].thumbnail}">
                  <div class="author">${responseObject[i].author}</div>
                  <video controls=""  name="media">
                  <source src=${responseObject[i].link} type="audio/mpeg">
</video>
</div>`
            }
        } else {
                 alert("Lấy thông tin bài hát thất bại");
        }
    }
}
xhr.open("GET", API_DOMAIN + GET_LATEST_PATH);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", `Basic ${tokenKey}`);
xhr.send();
