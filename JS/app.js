console.log('Kush Jaiswal');
let songs = [
    {songName:"SLOW DANCING IN THE DARK", filePath:"/Assets/songs/SLOW DANCING IN THE DARK.mp3",coverPath:"/Assets/imgs/Joji_Ballads_1.png",artistName:"Joji"}
]

let songIndex = 0;
let audioElement = new Audio('/Assets/songs/SLOW DANCING IN THE DARK.mp3');
let masterPlay = document.querySelector('#masterPlay');
let pauseIcon = document.querySelector('#pauseIcon');
let playIcon = document.querySelector('#playIcon');
let myProgressBar = document.querySelector('#song-progress-bar');

//Handle play/pause 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        pauseIcon.style.display ="block";
        playIcon.style.display = "none";
    }
    else{
        audioElement.pause();
        pauseIcon.style.display ="none";
        playIcon.style.display = "block";
    }
})
// Listen to events 
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt(audioElement.currentTime/audioElement.duration*100);
    myProgressBar.value = progress
});

myProgressBar.addEventListener('change' ,()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration /100;
})