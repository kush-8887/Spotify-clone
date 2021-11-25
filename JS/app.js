console.log('Kush Jaiswal');
let songs = [
    {songName:"SLOW DANCING IN THE DARK", filePath:"/Assets/songs/Song0.mp3",coverPath:"/Assets/imgs/Joji_Ballads_1.png",artistName:"Joji"},
    {songName:"Sanctuary", filePath:"/Assets/songs/Song1.mp3",coverPath:"/Assets/imgs/Joji-Nectar.png",artistName:"Joji"},
    {songName:"SAD!", filePath:"/Assets/songs/Song2.mp3",coverPath:"/Assets/imgs/xxxtentation-cover.jpeg",artistName:"XXXTENTATION"},
    {songName:"Marijiuana Breath", filePath:"/Assets/songs/Song3.mp3",coverPath:"/Assets/imgs/marijuana-breath.jpg",artistName:"Adam Jensen"},
    {songName:"STAY", filePath:"/Assets/songs/Song4.mp3",coverPath:"/Assets/imgs/Stay-justin-bieber.jpg",artistName:"The Kid LOROI,Justin Bieber"},
    {songName:"Let Me Love You", filePath:"/Assets/songs/Song5.mp3",coverPath:"/Assets/imgs/let-me-love-you.jpeg",artistName:"The Kid LOROI,Justin Bieber"},
]

let songIndex = 0;
let audioElement = new Audio('/Assets/song/song0.mp3')
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

Array.from(document.getElementsByClassName("song-box")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index = parseInt(e.target.id);
        audioElement.src = "/Assets/songs/Song${song}.mp3";     
        audioElement.currentTime = 0;
        audioElement.play();
        pauseIcon.style.display ="block";
        playIcon.style.display = "none";
    })
})