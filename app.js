let userScore = 0;
let comScore = 0;

const choice = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg") ;
const userScorepare = document.querySelector("#user-score");
const compScorepare = document.querySelector("#comp-score");

      const genComputerchoice = () => {
   //rock ,paper,scissors
             const options = ["rock","paper","scissor"];
             const randIdx = Math.floor(Math.random() * 3);
             return options[randIdx];
      }   
      
       const drawGame = () => {
  
        msg.innerText = "game was draw . play again";
        msg.style.backgroundColor ="blue";
       }
         const showWinner = (userWin, userChoice, compChoice) => {
            if(userWin){
                userScore++;
                userScorepare.innerText = userScore;
                console.log("You Win!");
                msg.innerText = "You Win!. Your "+userChoice +" beats "+ compChoice;
                msg.style.backgroundColor ="green";
            } else{
                comScore++;
                compScorepare.innerText = comScore;
             
                msg.innerText = "You Win!. Your "+userChoice +" beats "+ compChoice;
                msg.style.backgroundColor ="red";
            }

         }
       const playGame = (userChoice) => {
        console.log("user choice =", userChoice);
        const compChoice = genComputerchoice();
        console.log("comp choice =", compChoice);

        if(userChoice === compChoice){
            drawGame();
        }
        else{
            let userWin = true;
            if(userChoice === "rock"){
                compChoice === "paper" ? false : true;
            }
            else if (userChoice === "paper") {
                userWin = compChoice === "scissors" ? false : true; 
            }
            else{
               userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice,compChoice );


        }
       };

    choice.forEach((choices) => {
       
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
         console.log("choices was clicked" , userChoice);
         playGame(userChoice);
        });
 });