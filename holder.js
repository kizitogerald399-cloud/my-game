 
 
 let score={
            wins: 0,
            losses:0,
            ties:0,

          }
         
        function playGame(playerMove){ const choices = ['Rock', 'Paper', 'Scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      let computerMove = choices[randomIndex];
      console.log(computerMove); 
       let result = '';

        }

 // alert(`You chose:${playerMove}.\ncomputer chose: ${computerMove}\n ${result}\n wins : ${score.wins} Losses:${score.losses} Ties:${score.ties}`)
 // }
  

//function updateScore(){
 // document.querySelector('.js-score').innerHTML =`wins : ${score.wins} Losses:${score.losses} Ties:${score.ties}`;

//
 if (playerMove=== computerMove){result = 'Tie.'}
          else if ((computerMove==='Scissors' && playerMove === 'Rock')||
        (computerMove==='Paper' && playerMove === 'Scissors')||
        (computerMove==='Rock' && playerMove === 'Paper')) 
          {result='You win!'}
          else {result='You lose'}
          console.log(result);
      if (result==='You win!'){
        score.wins +=1;    

  }else if (result==='You lose'){score.losses += 1;}
  else if(result==='Tie.'){score.ties=score.ties;} 
  

  updateScore();



