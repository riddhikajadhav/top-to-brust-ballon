const handelClick = document.getElementById("handel");
const ballons = document.querySelectorAll(".whole-ballon");

let ballonSize = 0;
let ballonCount = 1;


handelClick.addEventListener("click",()=>{
    makeBallon(ballonCount);
})


function makeBallon(number){

const ballonContainer = document.getElementById("ballonContainer"+number);
const ballon = document.getElementById("ballon-image"+number);
const letter = document.getElementById("letter"+number);
const rope = document.getElementById("rope"+number);


    handelClick.style.transform = "translatey(70px)";
   
    ballonContainer.style.transform = "translate(-3px,-5px)";
    ballonSize+=100;
    ballon.style.height = ballonSize+"px"
    if(ballonSize >= 200){
        letter.style.display = "block";
        rope.style.display = "block";
        ballonContainer.style.animationName = "flyBallon";
        ballonContainer.style.animationDuration = "5s";
        ballonContainer.style.animationDelay = "1s";
        ballonContainer.style.transform = "translate(-350px,-300px)";
        ballonCount++;
        ballonSize=0;
    }

    setTimeout(()=>{
        handelClick.style.transform = "translatey(0px)";

    },250)

}

let brustSound = document.getElementById("sound");

for(let i=0 ; i<7 ; i++){
ballons[i].addEventListener("click",()=>{
    ballons[i].style.display = "none";
  
})

}



