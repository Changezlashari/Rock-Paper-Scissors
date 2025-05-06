let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerHTML = "game was draw";
    msg.style.backgroundColor = "blue";
    
};

const showWinner = (userWin) => { 
    if (userWin) {
        console.log("user wins");
        msg.innerHTML = "user wins";
        msg.style.backgroundColor = "green";
    } else {
        console.log("computer wins");
        msg.innerHTML = "computer wins";
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

        showWinner(userWin);
    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log( userChoice);
        playGame(userChoice)
    });
});