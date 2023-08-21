console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Shoorveer", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Manike", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Brodha V", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Yalgaar", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Deva Deva", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },

]


// Handle play/pause click
masterPlay.addEventListener('click', () => {
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
})// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    spot = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = spot;
 
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 4) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    Btn();

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 4
    }
    else {
        songIndex -= 1;
    }

    Btn();

})


////////////////////////////////////////////////////////////////////////////////////

document.getElementById('coverplay1').addEventListener('click', () => {

    shoorveer();
})

document.getElementById('coverplay2').addEventListener('click', () => {
    Manike();
})

document.getElementById('coverplay3').addEventListener('click', () => {
    Brodha();

})

document.getElementById('coverplay4').addEventListener('click', () => {
    Yalgaar();

})

document.getElementById('coverplay5').addEventListener('click', () => {
    Deva();
})

////////////////////////////////////////////////////////////////////////////////////

document.getElementById('coverplay6').addEventListener('click', () => {

    shoorveer();
})

document.getElementById('coverplay7').addEventListener('click', () => {
    Manike();
})

document.getElementById('coverplay8').addEventListener('click', () => {
    Brodha();

})

document.getElementById('coverplay9').addEventListener('click', () => {
    Yalgaar();

})

document.getElementById('coverplay0').addEventListener('click', () => {
    Deva();
})







