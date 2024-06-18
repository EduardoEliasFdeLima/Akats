var slides = document.getElementsByClassName("slide");
var sld = document.getElementById('btnleft')
var sldd = document.getElementById('btnright')
var index = 0;
var metade = slides.length;
var met = (metade / 2) - 2;
var cont = 0;

sld.style.display = 'none'
 
function goLeft() {

    if(index <= 0) index = 1;
    else index=0;


   

    //slides[0].style.marginLeft = "-" + index * 450 + "px";


    
    slides[0].style.marginLeft = "-" + index * 45 + "%";
    sld.style.display = 'none'
    sldd.style.display = 'flex'

}
    
function goRight() {

    if(index >= 1 ) index = 0;
    else index=1;


      
    //slides[0].style.marginLeft = "-" + index * 400 + "px";
    slides[0].style.marginLeft = "-" + index * 45 + "%";
    sldd.style.display = 'none'
    sld.style.display = 'flex'



}


