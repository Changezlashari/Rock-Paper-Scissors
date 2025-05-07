let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
};

const drawGame = () => {
    msg.innerHTML = "Game Was draw";
    msg.style.backgroundColor = "blue";
    
};

const showWinner = (userWin, userChoice, compChoice) => { 
    if (userWin) {
        userScore++
        userScorePara.innerText = userScore
        msg.innerHTML = `User Wins! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("Computer Wins!");
        compScore++
        computerScorePara.innerText = compScore
        msg.innerHTML = `Computer Wins ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}



const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer Choice = ", compChoice); 

    if (userChoice === compChoice) {
        drawGame();
        
    }else {
        let userWin = true;
        if (userChoice === "rock" ) {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log( userChoice);
        playGame(userChoice);
    });
});