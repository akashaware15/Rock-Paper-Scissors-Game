
// alert("");

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const container = document.querySelector(".msg-container");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


// let clickBtn = document.createElement("button");
// clickBtn.innerText = " Click Me!" 
// console.log(clickBtn);


// document.querySelector("#rock").append(clickBtn);



const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};



const drawgame = () => {
    // console.log("Game is draw.");
    msg.innerText = "Game Was Draw. play again";
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose");
        msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
};



const playGame = (userChoice) => {
    // console.log("user choice =", userChoice);
    const compChoice = genComChoice();
    // console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawgame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Your Choice Was Clicked" ,userId);
        playGame(userChoice);
    });
});

let modeBtn = document.querySelector(".btn1");
let body = document.querySelector("body");

let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector(".score-board").style.color = "white";
        document.querySelector(".btn1").style.border = "1px solid red";
        document.querySelector(".btn1").style.backgroundColor = "white";
        document.querySelector(".btn1").style.color = "black";
        

        

    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector(".score-board").style.color = "black";
        document.querySelector(".btn1").style.border = "1px solid black"
        document.querySelector(".btn1").style.backgroundColor = "black";
        document.querySelector(".btn1").style.color = "white";
    }
    console.log(currMode);
});
