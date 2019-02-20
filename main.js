var score, activePlayer, finalScore, isGamePlaying;

init();

var diceDom = document.querySelector(".dice");
var secDiceDom = document.querySelector(".dice-2");
diceDom.style.display = "none";
secDiceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function(){
    if(isGamePlaying){
    var dice = Math.floor(Math.random()*6+1);
        var diceTwo = Math.floor(Math.random()*6+1);
     diceDom.style.display = "block";
        secDiceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";
     secDiceDom.src = "dice-" + diceTwo + ".png";  
    if(dice !== 1 && diceTwo !==1){
        score += dice + diceTwo;
       
        document.getElementById("current-" + activePlayer).innerHTML = score;
        
    }
    else{    
       nextPlayer();
    }
      var prevDice = dice || diceTwo;
            if(prevDice === 6 && dice === 6){
                nextPlayer();
                  score += dice + diceTwo;
       
        document.getElementById("current-" + activePlayer).innerHTML = score;
                console.log(score);
            }
        
        
    }
  
});
document.querySelector(".btn-hold").addEventListener("click", function(){
    if(isGamePlaying){
        var setScore = document.getElementById("setScore").value;
console.log(setScore);
    finalScore[activePlayer] += score;
      var roundScore = document.getElementById("score-" +activePlayer);
    roundScore.innerHTML = finalScore[activePlayer];
    if(finalScore[activePlayer] >= setScore){
        document.getElementById("name-" + activePlayer).innerHTML = "Winner!";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".dice-2").style.display = "none";
         document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
         document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        isGamePlaying = false;
    }
   else{
        nextPlayer();
   }
    }
        
})
var nextPlayer = function(){
    document.getElementById("current-" + activePlayer).innerHTML = 0;
     activePlayer === 0 ? activePlayer = 1 :activePlayer = 0;
        score = 0;   
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

}
document.querySelector(".btn-new").addEventListener("click", function(){
  init(); 
     document.getElementById("name-0").innerHTML ="Player 1";
     document.getElementById("name-1").innerHTML ="Player 2";
      document.querySelector(".player-1-panel").classList.remove("winner");
      document.querySelector(".player-0-panel").classList.remove("winner");
     document.querySelector(".player-1-panel").classList.remove("active");
      document.querySelector(".player-0-panel").classList.add("active");
    document.getElementById("setScore").value = " ";
})
function init(){
    finalScore = [0, 0];
score = 0;
activePlayer = 0;
isGamePlaying = true;
    
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
   
}
