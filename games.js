 const choiceButtons = document.querySelectorAll('.button');// for all the buttons
 const result= document.querySelector('.result');// for the main div that encloses the hidden part
 const playerChoices = document.querySelector('.player-choice');// where the image for the user will sit
 const gameBoard = document.querySelector('.grid');//the first container with a triangle
 const houseChoice = document.querySelector('.house-choice');// where the image for computer move sits 
const nextbtn = document.getElementById('.next');
const scoreValue = document.getElementById('scorevalue')
const reset = document.getElementById('resets')
 const choices = ['rock', 'paper', 'scissors'];
 let score = 0;
 let results = '';

    choiceButtons.forEach(button => {
   button.addEventListener("click", () => {
     const playerChoice = button.id;
     console.log(playerChoice);
    
     gameBoard.classList.add('hidden');
     result.classList.remove('hidden');
  

   playerChoices.innerHTML = `<div> <img src="images/icon-${playerChoice}.svg" alt="${playerChoice}"></div>`; 

   houseChoice.innerHTML = `<div class="empty-space" style="background-color:black;"></div>`;

   setTimeout(()=>{
  const houseChoices = choices[Math.floor(Math.random()*3)];
  console.log(houseChoices)
   
  houseChoice.innerHTML = `
  <div class="buton ${houseChoices}"> <img src="images/icon-${houseChoices}.svg" ">
  </div>`;
    if (playerChoice==houseChoices){results='Tie'; score=score}
  else if(playerChoice=='paper' && houseChoice=='rock' || playerChoice=='rock' && houseChoices=='scissors' || playerChoice=='scissors' && houseChoices=='paper'){
    results = 'Win'; score += 1;

  }else {results='Lose'; score -= 1;}

 
  scorevalue.innerHTML = score;
  console.log(scorevalue.innerHTML);
  
  function reset(){
  gameBoard.classList.remove('hidden');
  result.classList.add('hidden');
  scorevalue.innerHTML = 0;
}
}, 1000);
    

   });});

const houseChoices = choices[Math.floor(Math.random()*3)];
 



function next(){
  gameBoard.classList.remove('hidden');
  result.classList.add('hidden')
}



 
 const buttonz = document.getElementById('style-btn');

buttonz.addEventListener('click', () => {
  buttonz.classList.toggle('clicked');
  if (buttonz.classList.contains('clicked')){
    buttonz.textContent = "FOLLOWING";


  }else{
    buttonz.textContent = "FOLLOW";
  }
  
});

 const mainDiv = document.getElementById('maindiv');
 const rulesbtn = document.getElementById('rules');
 const close = document.getElementById('close');

  rulesbtn.addEventListener('click', () =>{
  mainDiv.classList.add('active')
});
 close.addEventListener('click', () =>{
  mainDiv.classList.remove('active')
 });
 mainDiv.addEventListener('click', (event)=>{
  if(event.target ===mainDiv){
    mainDiv.classList.remove('active')
  }
 });
 
 
let resultz='';



 
 
 
 
 