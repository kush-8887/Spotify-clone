console.log('Kush Jaiswal');
let songs = [
    {songName:"SLOW DANCING IN THE DARK", filePath:"/Assets/songs/Song0.mp3",coverPath:"/Assets/imgs/Img0.jpg",artistName:"Joji"},
    {songName:"Sanctuary", filePath:"/Assets/songs/Song1.mp3",coverPath:"/Assets/imgs/Img1.jpg",artistName:"Joji"},
    {songName:"SAD!", filePath:"/Assets/songs/Song2.mp3",coverPath:"/Assets/imgs/Img2.jpg",artistName:"XXXTENTATION"},
    {songName:"Marijiuana Breath", filePath:"/Assets/songs/Song3.mp3",coverPath:"/Assets/imgs/Img3.jpg",artistName:"Adam Jensen"},
    {songName:"STAY", filePath:"/Assets/songs/Song4.mp3",coverPath:"/Assets/imgs/Img4.jpg",artistName:"The Kid LOROI,Justin Bieber"},
    {songName:"Let Me Love You", filePath:"/Assets/songs/Song5.mp3",coverPath:"/Assets/imgs/Img5.jpeg",artistName:"The Kid LOROI,Justin Bieber"},
]

let songIndex = 0;
let imageIndex = 0;
let audioElement = new Audio("");
let masterPlay = document.querySelector('#masterPlay');
let pauseIcon = document.querySelector('#pauseIcon');
let playIcon = document.querySelector('#playIcon');
let myProgressBar = document.querySelector('#song-progress-bar');
let currentSongImg = document.querySelector('#currentSongImgChange');
let currentSongName = document.querySelector('#currentSongName');

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
        songIndex = parseInt(e.target.id);
        imageIndex = parseInt(e.target.id)
        currentSongImg.src = `/Assets/imgs/Img${imageIndex}.jpg`
        audioElement.src = `/Assets/songs/Song${songIndex}.mp3`;
        audioElement.currentTime = 0;
        pauseIcon.style.display ="block";
        playIcon.style.display = "none";
        audioElement.play();
    })
})