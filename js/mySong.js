const API_DOMAIN = "https://2-dot-backup-server-001.appspot.com";
const MY_SONG_PATH = "/_api/v2/songs/get-mine";
var formMySong = document.getElementById("form-my-song");
var tokenKey = sessionStorage.getItem("McLaren");
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
            var responseObject = JSON.parse(this.responseText);
            console.log(this.responseText);
            alert(`Lấy bài hát thành công có Token là ${responseObject.token}`);
            for (var i =0; responseObject.length;i++){
                formMySong.innerHTML +=`<div class="form-layout">
                  <div class="title">${responseObject[i].name}</div>
                  <img class="thumbanil" src="${responseObject[i].thumbnail}">
                  <div class="author">${responseObject[i].author}</div>
                  <video controls=""  name="media">
                  <source src=${responseObject[i].link} type="audio/mpeg">
</video>
</div>`
            }
        } else {
            alert("Lấy bài hát thất bại, yêu càu kiểm tra lại thông tin: " + xhr.responseText);
        }
    }
}
xhr.open("GET", API_DOMAIN + MY_SONG_PATH);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", `Basic ${tokenKey}`);
xhr.send();

