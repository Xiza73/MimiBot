var music = document.getElementById("p1");
function mymusic() {
    if(music.paused){
        music.play();
    }else{
        music.pause();
    }
}