///////////////////////////////////////////////////////////////////////////////////////////////////    song 1    //////////
function shoorveer() {

    songIndex = 0
    audioElement.src = `songs/1.mp3`;
    masterSongName.innerText = "Shoorveer";
    audioElement.currentTime = 0;
    audioElement.play();

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////    song 2    //////////
function Manike() {

    songIndex = 1
    audioElement.src = `songs/2.mp3`;
    masterSongName.innerText = "Manike";
    audioElement.currentTime = 0;
    audioElement.play();

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////    song 3    //////////
function Brodha() {
    songIndex = 2
    audioElement.src = `songs/3.mp3`;
    masterSongName.innerText = "Brodha V";
    audioElement.currentTime = 0;
    audioElement.play();

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////    song 4    //////////
function Yalgaar() {
    songIndex = 3
    audioElement.src = `songs/4.mp3`;
    masterSongName.innerText = "Yalgaar";
    audioElement.currentTime = 0;
    audioElement.play();

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////    song 5    //////////
function Deva() {
    songIndex = 4
    audioElement.src = `songs/5.mp3`;
    masterSongName.innerText = "Deva Deva";
    audioElement.currentTime = 0;
    audioElement.play();

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////    btn       //////////
function Btn() {
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    document.getElementById('myImage').src = `/covers/${songIndex + 1}.jpg`
    console.log(songIndex);
    gif.style.opacity = 1;
}
///////////////////////////////////////////////////////////////////////////////////////////////////    decbtn    //////////
