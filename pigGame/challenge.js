/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game



Challenges
1. if a player rolls dice twice, its the next players chance
2. add an input fiend in html to take the final score limit from the user
3. take 2 dices, if any one of them rolls a 1, then the other players chance with the same rules as the original game.  i.e the score
will turn to
*/


//the pig game
var scores, roundScore, activePlayer, dice, gamePLaying, lastDice;
gamePLaying=true;
init();
document.querySelector('.btn-roll').addEventListener('click', function(){
     if(gamePLaying){
        //1. Random number
    var dice1=Math.floor(Math.random()*6)+1;
    
    var dice2=Math.floor(Math.random()*6)+1;
    //2. Display the result
        document.getElementById('dice-1').style.display='block';
        document.getElementById('dice-2').style.display='block';
    //    var diceDOM=document.querySelector('.dice');
        document.getElementById('dice-1').src= 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src= 'dice-' + dice2 + '.png';

//3. update the round score if the rolled number was not 1

        if(dice1!==1 && dice2!==1){
            //add score
            roundScore+=dice1+dice2;
            document.querySelector('#current-'+ activePlayer).textContent=roundScore;
            }
        else{
            //next player
           nextPlayer();
     }
/*
    
        if (dice=== 6 && lastDice===6){
            scores[activePlayer]= 0;

        } else   if(dice!==1){
            //add score
            roundScore+=dice;
            document.querySelector('#current-'+ activePlayer).textContent=roundScore;
            }
        else{
            //next player
           nextPlayer();
     }
     lastDice=dice;
    }*/}
});


document.querySelector('.btn-hold').addEventListener('click',function(){
  if(gamePLaying){
        //add current score to global score

    scores[activePlayer]+=roundScore;

    //update the user UI

    document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];

    var input= document.querySelector('.final-score').value;
    console.log(input);
    var winningScore;

    if(input){
        winningScore=input;

    }else{
        winningScore=20;
    }
    //check if the player won the game
    if(scores[activePlayer]=winningScore){
        document.querySelector('#name-'+activePlayer).textContent='WINNER!'; 
        document.getElementById('dice-1').style.display='none';
        document.getElementById('dice-2').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
        gamePLaying = false;
        

    }else{   //next player
    nextPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores=[0,0];
    roundScore = 0 ;
    activePlayer=0;

    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('#name-0').textContent='PLAYER 1'; 
    document.querySelector('#name-1').textContent='PLAYER 2'; 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');   
    document.querySelector('.player-1-panel').classList.remove('active');   
    document.querySelector('.player-0-panel').classList.add('active');  
    gamePLaying=true; 

}


function nextPlayer(){
    activePlayer===0? activePlayer =1 : activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
}