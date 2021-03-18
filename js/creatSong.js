const API_DOMAIN = "https://2-dot-backup-server-001.appspot.com";
const CREATE_SONG_PATH = "/_api/v2/songs";
var  creatSongForm = document.forms["form-creat-song"];
var txtName = creatSongForm["name"];
var txtSinger = creatSongForm["singer"];
var txtAuthor = creatSongForm["author"];
var txtThumbnail = creatSongForm["thumbnail"];
var txtLink = creatSongForm["link"];
var btnSubmit = creatSongForm["button"];
var tokenKey = sessionStorage.getItem("McLaren");
alert(tokenKey);
btnSubmit.onclick = function () {
    var name = txtName.value;
    var singer = txtSinger.value;
    var author = txtAuthor.value;
    var thumbnail = txtThumbnail.value;
    console.log(thumbnail);
    var link = txtLink.value;
    var sendData = {
        name: name,
        singer: singer,
        author: author,
        thumbnail: thumbnail,
        link: link
    }
    var jsonData = JSON.stringify(sendData);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 201) {
                var responseObject = JSON.parse(this.responseText);
                console.log(this.responseText);
                alert(`Gửi bài hát thành công có Token là ${responseObject.token}`);
                window.location.assign("mySong.html");
            } else {
                alert("Gửi bài hát thất bại, yêu càu kiểm tra lại thông tin: " + xhr.responseText);
            }
        }
    }
    xhr.open("POST", API_DOMAIN + CREATE_SONG_PATH);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", `Basic ${tokenKey}`);
    xhr.send(jsonData);
 }

