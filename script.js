let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let ctrl_icon = document.querySelector("#ctrl_icon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrl_icon.classList.contains("fa-pause")) {
        song.pause();
        ctrl_icon.classList.remove("fa-pause");
        ctrl_icon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrl_icon.classList.add("fa-pause");
        ctrl_icon.classList.remove("fa-play");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 100)
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrl_icon.classList.add("fa-pause");
    ctrl_icon.classList.remove("fa-play");
}
