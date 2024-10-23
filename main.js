let count = 1 ;
let x,y ;
let theNoButton = document.getElementById("b2") ;
function move(){
    do{
        x = Math.random()*100 ;
        y = Math.random()*100 ;
    }while(x>40 || x<15 || y>30  || y<20) ;
    if(count%3 === 0) {
        x = -x;
        y = -y; 
    }
    if(count%3 === 1) {
        x = -x;
        y = y; 
    }
    if(count%3 === 2) {
        x = x;
        y = y; 
    }
    console.log(`x = ${x} px \ny = ${y} px`) ;
    theNoButton.style.transform = `translate(${x*400/100}px,${y*150/100}px)`;
    count++ ;
}


function afterYes() {
    let element = document.querySelector(".container") ;
    element.innerHTML = `<p class="afterYes">I khew you do :)</p>`;
}





