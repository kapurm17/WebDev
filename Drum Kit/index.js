var len = document.querySelectorAll(".drum").length;


function handleClick() {

  if(this.innerHTML == 'w') {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    var key = document.querySelector(".w");
    key.classList.add("playing");
    setTimeout(()=>{
      key.classList.remove("playing");
    }, 100);


  } else if (this.innerHTML == 'a') {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } else if (this.innerHTML == 's') {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (this.innerHTML == 'd') {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (this.innerHTML == 'j') {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (this.innerHTML == 'k') {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (this.innerHTML == 'l') {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
}

for(let i=0; i<len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", function(event){
  var ch = event.key;

  switch (ch){
    case 'w':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case 'a':
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;

    case 's':
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case 'd':
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case 'j':
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case 'k':
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case 'l':
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    default:
    alert("Press the correct key");
  }

});
