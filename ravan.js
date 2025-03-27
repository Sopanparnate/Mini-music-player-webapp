"use strict";
const imgEl = document.getElementById("bg_img");
const imgCoverEl = document.getElementById("cover");
const musicTitleEl = document.getElementById("music_title");
const musicArtistEl = document.getElementById("musric_artist");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");
const prevBtnEl = document.getElementById("prev");
const playvBtnEl = document.getElementById("play");
const nextvBtnEl = document.getElementById("next");
const volumeUpvBtnEl = document.getElementById("volume-up");
const volumeDownvBtnEl = document.getElementById("volume-up");
const songs = [
  {
    path: "music 1.mp3",
    displayName: "Naa ready",
    cover: "image 1.jpeg",
    artist: "Anirudh Ravichander",
  },
  {
    path: "music 2.mp3",
    displayName: "Aila Re Aila",
    cover: "image 2.jpeg",
    artist: "Kalpana Patowary",
  },
  {
    path: "music 3.mp3",
    displayName: "Blockbuster",
    cover: "image 3.jpeg",
    artist: "Shreya Ghoshal, Nakash Aziz",
  },
  {
    path: "music 4.mp3",
    displayName: "Iddarammayilatho",
    cover: "image 4.jpeg",
    artist: "Viswa, David Simon",
  },
  {
    path: "music 5.mp3",
    displayName: "Marri",
    cover: "image 5.jpeg",
    artist: "Vijay Yesudas, and Kajal Aggarwal",
  },
  {
    path: "music 6.mp3",
    displayName: "Vaathi Coming",
    cover: "image 6.jpeg",
    artist: "Anirudh Ravichander",
  },
  {
    path: "music 7.mp3",
    displayName: "Ordinary Person",
    cover: "image 1.jpeg",
    artist: " Nikhita Gandhi",
  },
  {
    path: "music 8.mp3",
    displayName: "Thee Thalapathy Song",
    cover: "image 8.jpeg",
    artist: "Deepak Blue and Rahul Nambiar",
  },
  {
    path: "music 9.mp3",
    displayName: "Hukum",
    cover: "image 9.jpeg",
    artist: "Anirudh Ravichander",
  },
  {
    path: "music 10.mp3",
    displayName: "JD vs Bhavani Theme",
    cover: "image 6.jpeg",
    artist: "Anirudh Ravichander",
  },
  {
    path: "music 11.mp3",
    displayName: "Tujh mein rab dikhta hain",
    cover: "image 11.jpeg",
    artist: "Roopkumar Rathod",
  },
  {
    path: "music 12.mp3",
    displayName: "Jag Ghoomeya",
    cover: "image 12.jpeg",
    artist: "Vishal-Shekhar",
  },
  {
    path: "music 13.mp3",
    displayName: "Panchhi bole",
    cover: "image 13.jpeg",
    artist: "M.M.Keeravani",
  },
  {
    path: "music 14.mp3",
    displayName: "Deewangi Deewangi",
    cover: "image 14.jpeg",
    artist: "Shaan",
  },
  {
    path: "music 16.mp3",
    displayName: "Khalibali",
    cover: "image 16.jpeg",
    artist: "Shail Hoda and Shivam Pathak",
  },
  {
    path: "music 17.mp3",
    displayName: "Malhari",
    cover: "image 17.jpeg",
    artist: "Vishal Dadlani",
  },
  {
    path: "music 18.mp3",
    displayName: "Armdham",
    cover: "image 18.jpeg",
    artist: "Pranavam Sasi",
  },
  {
    path: "music 19.mp3",
    displayName: "Illuminati",
    cover: "image 18.jpeg",
    artist: "Sushin Shyam",
  },
  {
    path: "music 21.mp3",
    displayName: "Hamein tumse hua hai pyar",
    cover: "image 21.jpeg",
    artist: "Alka yagnik and Udit Narayan",
  },
  {
    path: "music 22.mp3",
    displayName: "Dil Cheez Tujhe Dedi",
    cover: "image 22.jpeg",
    artist: "Ankit Tiwari and Arjit Singh",
  },
  {
    path: "music 23.mp3",
    displayName: "Aasa Koodha",
    cover: "image 23.jpeg",
    artist: "Sai Abhyankkar and Sai Smriti",
  },
  
];
const music = new Audio();
let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playMusic() {
  isPlaying = true;
  playvBtnEl.classList.replace("fa-play", "fa-pause");
  playvBtnEl.setAttribute("title", "pause");
  music.play();
}

function pauseMusic() {
  isPlaying = false;
  playvBtnEl.classList.replace("fa-pause", "fa-play");
  playvBtnEl.setAttribute("pause", "title");
  music.pause();
}

function loadMusic(songs) {
  music.src = songs.path;
  musicTitleEl.textContent = songs.displayName;
  musicArtistEl.textContent = songs.artist;
  imgCoverEl.src = songs.cover;
  imgEl.src = songs.cover;
}

function changeMusic(direction) {
  musicIndex = musicIndex + direction + (songs.length % songs.length);
  loadMusic(songs[musicIndex]);
  playMusic();
}

function setProgressBar(e) {
  const width = playerProgressEl.clientWidth;
  const xValue = e.offsetX;
  music.currentTime = (xValue / width) * music.duration;
}

function updateProgressBar() {
  const { duration, currentTime } = music;
  const ProgressPercent = (currentTime / duration) * 100;
  progressEl.style.width = `${ProgressPercent}%`;
  const formattime = (timeRanges) =>
    String(Math.floor(timeRanges)).padStart(2, "0");
  durationEl.textContent = `${formattime(duration / 60)} : ${formattime(
    duration % 60,
  )}`;
  currentTimeEl.textContent = `${formattime(currentTime / 60)} : ${formattime(
    currentTime % 60,
  )}`;
}
function volumeUp(){
  if (currentVolume < .9){currentVolume +=.1 ;
    sound.volume = currentVolume;
    var $toastContent= $('<span>Volume'+ peseInt(currentVolume*100)+'%'+ '</span>');
    matrialize.toast($toastContent,2000);
   }
   else {
    alert("max Vol")

   }
}
function volumeDown(){
  if (currentVolume < .9){currentVolume -=.1 ;
    sound.volume = currentVolume;
    var $toastContent= $('<span>Volume'+ peseInt(currentVolume*100)+'%'+ '</span>');
    matrialize.toast($toastContent,2000);
   }
   else {
    alert("min Vol")

   }
}

const btnEvents = () => {
  playvBtnEl.addEventListener("click", togglePlay);
  nextvBtnEl.addEventListener("click", () => changeMusic(1));
  prevBtnEl.addEventListener("click", () => changeMusic(-1));
  
  music.addEventListener("ended", () => changeMusic(1));
  music.addEventListener("timeupdate", updateProgressBar);
  playerProgressEl.addEventListener("click", setProgressBar);
};

document.addEventListener("DOMContentLoaded", btnEvents);

loadMusic(songs[musicIndex]);