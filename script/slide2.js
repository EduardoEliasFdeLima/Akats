var slides = document.getElementsByClassName("slide");
var index = 0;


function goLeft() {

  if(index <= 0) index = 3;
  else index--;


    if(screen.width <= 500){
        slides[0].style.marginLeft = "-" + index * 250 + "px";
    }
    else if(screen.width <= 750){
        slides[0].style.marginLeft = "-" + index * 420 + "px";
    }else{
        slides[0].style.marginLeft = "-" + index * 380 + "px";
    }

 

  cont++;
}
function goRight() {
  if(index >= 3 ) index = 0;
  else index++;

 

    if(screen.width <= 500){
        slides[0].style.marginLeft = "-" + index * 250 + "px";
    }
    else if(screen.width <= 750){
        slides[0].style.marginLeft = "-" + index * 420 + "px";
    }else{
        slides[0].style.marginLeft = "-" + index * 380 + "px";
    }


}
