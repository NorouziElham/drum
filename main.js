function changeback(key)
{ switch(key){
    case "w":
        document.getElementById(key).style.backgroundImage="url('images/tom1.png')";
        break;
    case "a":
        document.getElementById("a").style.backgroundImage="url('images/tom2.png')";
        break;
    case  "s" :  
        document.getElementById("s").style.backgroundImage="url('images/tom3.png')";
        break;
    case "d":
        document.getElementById("d").style.backgroundImage="url('images/tom4.png')";
        break;
    case "j":
        document.getElementById("j").style.backgroundImage="url('images/kick.png')";
        break;
    case "k" :
        document.getElementById("k").style.backgroundImage="url('images/crash.png')";
        break;   
    case "l" :
        document.getElementById("l").style.backgroundImage="url('images/snare.png')";
        break;               
   }
}
function normal(key){
    document.getElementById(key).style.backgroundImage="none";
}
function playsound(key)
   {switch (key) {
        case "w":
          var mysound = new Audio('sounds/tom-1.mp3');
          mysound.play();
          break;
       case "a":    
          var mysound = new Audio('sounds/tom-2.mp3');
          mysound.play();
          break;
       case "s":    
          var mysound = new Audio('sounds/tom-3.mp3');
          mysound.play();
          break;    
       case "d":    
          var mysound = new Audio('sounds/tom-4.mp3');
          mysound.play();
          break;   
       case "j":    
          var mysound = new Audio('sounds/kick-bass.mp3');
          mysound.play();
          break; 
       case "k":    
          var mysound = new Audio('sounds/crash.mp3');
          mysound.play();
          break; 
       case "l":    
          var mysound = new Audio('sounds/snare.mp3');
          mysound.play();
          break;}                       

}

