function promptForPlayerName(player){
 var playername = prompt(player + " " + "Enter name")
 if(playername.length > 15){
     alert("Wow, thats a long name!");  
   }
return playername;
}

 function tryTwoPointShot(){
    if (Math.random()> 0.2 & Math.random()> 0.2){
       return true;
    }
    else{
       return false;
    }
 }
 


 function tryThreePointShot(){
    if (Math.random()>= 0.2 || Math.random()>= 0.8){
       return true;
    }
    else{
       return false;
    }
 }
 

 function getShotString(playername, numberofpoints, good ){
    if (good){
       return playername + " " + "Attempted a "+ numberofpoints + " " + "pointer. It was good";
    }
    else{
       return playername+ "Attempted a " + numberofpoints + " " + "pointer. It was not good";
    }
 }
 

 
 function updateScore(good, currentpoints, numberofpoints){
 if (good){
  return currentpoints + numberofpoints;
 }
 else{
       return currentpoints;
    }
 }
 
function isEndOfGame(currentpoints, playername){
 if(currentpoints>= 20){
  alert("The game is over," + " " + playername + " " + "won!");
  return true;
 }
 else{
  return false;
 }
}