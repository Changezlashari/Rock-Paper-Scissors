let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
};

const drawGame = () => {
    console.log("game was draw");
    
}



const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp Choice = ", compChoice); 

    if (userChoice === compChoice) {
        drawGame();
        
    }else {
        let userWin = true;
        if (userChoice === "rock" ) {
            userWin = compChoice === "paper" ? false : true;
        }
    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked", userChoice);
        playGame(userChoice)
    });
});