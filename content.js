const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let Btn = document.getElementById('Btn');
let btn2 = document.getElementById('btn2');
let lastHole;
let timeUp = false;
let score = 0;
let a =2;



function randomTime(min, max){
    return Math.round(Math.random() * (max - min ) + min );
}
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }
  

function peep(){
    const time = randomTime(300,1200);
    const hole = randomHole(holes);
    hole.classList.add('up')

    setTimeout(function (){
        hole.classList.remove('up');
        if(!timeUp)  peep();
    },time );

}
function stop(){

    window.location.reload()  
}

function startGame (){
    scoreBoard.textContent = 0 ;
   timeUp = false
   score = 0 ;
    peep();
   
    setTimeout(function(){
        timeUp = true;
    },10000);
}

function bank(e){
    if(!e.isTrusted) return;
    score ++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}


function countdown() {
 seconds = document.getElementById('countdown').innerHTML;
 
 if (seconds == 0) {
  temp.innerHTML = "BuzZzzZZ!!!";
  if(score > highScore){
   highest.textContent = score
   localStorage.setItem('High Score', score)
   alert(`New High Score! ${score}  Zombie killed!`)
  }
 return;
 }
 seconds--;
 temp.innerHTML = seconds;
 setTimeout(countdown, 1000);
}




moles.forEach(mole => mole.addEventListener('click',bank));

   


 Btn.addEventListener('click',startGame);
 btn2.addEventListener('click',stop);
 
