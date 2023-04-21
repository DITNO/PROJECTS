var drumelement = document.querySelectorAll(".drum").length;

for (var i =0;i<drumelement;i++){

    document.querySelectorAll(".drum")[i].addEventListener('click',handleclick);
    
    function handleclick(){
        
        var buttoninnerHTML = this.innerHTML;
        keycheck(buttoninnerHTML);

    }
}

document.addEventListener("keydown",function(event) {
    var keypressuser = event.key;
    keycheck(keypressuser);
});

function keycheck (key){
    switch (key) {
        case 'w':
            var audio_w = new Audio('./sounds/crash.mp3');
                    audio_w.play();
            break;
        case 'a':
            var audio_a = new Audio('./sounds/kick-bass.mp3');
                    audio_a.play();
            break;
        case's':
            var audio_s = new Audio('./sounds/snare.mp3');
            audio_s.play();
            break;
        case'd':
            var audio_d = new Audio('./sounds/tom-1.mp3');
            audio_d.play();
            break;
        case'j':
            var audio_j = new Audio('./sounds/tom-2.mp3');
            audio_j.play();
            break;
        case'k':
            var audio_k = new Audio('./sounds/tom-3.mp3');
            audio_k.play();
            break;
        case'l':
            var audio_l = new Audio('./sounds/tom-4.mp3');
            audio_l.play();
            break;
        default: console.log(keypressuser);
            break;
    }
}
