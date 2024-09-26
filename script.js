
let playerScore = 0;
let computerScore = 0;

const options = document.querySelectorAll(".option img");
console.log(options)
const message = document.querySelector("#message")
const playerScoreElement = document.querySelector("#player-score")
const computrScoreElement = document.querySelector("#computer-score")


const generateComputerChoice=()=>{
    const choices = ["Rock","Paper","Scissors"];
    const randomIndex = Math.floor(Math.random()*3)
    return choices[randomIndex];
}

options.forEach((option)=>{
    option.addEventListener("click",()=>{
        console.log(option)
        const playerChoice = option.id;
        // console.log('clicked img')
        console.log(` player selected : ${playerChoice}`);
        playGame(playerChoice);
    })
})


const draw=()=>{
    message.innerText="Game Was Draw! Play again";
    message.Style.backgroundcolor = "#FFFF00";
}



    const playGame=(playerChoice)=>{
        const computerChoice = generateComputerChoice();
        if(playerChoice === computerChoice){
            draw();
        }
        else{
            let playerWins = true;
            if(playerChoice === "Rock"){
                playerWins = computerChoice === "Paper"? false : true;
            }
            else if(playerChoice === "Paper"){
                playerWins = computerChoice === "Scissors"?false:true;
            }
            else{
                playerWins = computerChoice === "Rock"? false:true;
            }
            showWinner(playerWins,playerChoice,computerChoice);

            }
    }
        
    
        const showWinner=(playerWins,playerChoice,computerChoice)=>{
            if(playerWins){
                playerScore++;
                playerScoreElement.innerText= playerScore;
                message.innerText= 'You Win! Congratulations.';
                message.style.backgroundcolor = "green";

            }
            else{
                computerScore++;
                computrScoreElement.innerText = computerScore;
                message.innerText= 'You lost!Computer Win..';

                message.style.backgroundcolor = "red";


            }
        }
        
