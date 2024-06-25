let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =  document.querySelector("#user-score"); 
const compScorePara =  document.querySelector("#comp-score"); 
const genComputerChoice  = () =>{

    const options = ['rock', 'paper', 'scissors'];

    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () =>{
    console.log("Game is draw");
    msg.innerText = "Game was draw play again";
    msg.style.backgrounColor = "yellow";

}
const showWinner = (userwin,userChoice,compChoice)=>{
    if(userwin) {
        userscore++;
        userScorePara.innerText = userscore;
        console.log("You win");
        msg.innerText = `You win , Your ${userChoice} beats ${compChoice} `;
        msg.style.backgrounColor= "green";
    }else{
        console.log("you lose");
        compscore++
        msg.innerText = "You lose";
        msg.style.backgrounColor = "red";
        compScorePara.innerText = compscore;
    }
}
const playGame = (userChoice)=>{
    
    console.log("user choice =", userChoice);
    //Generate computer choice -> modular
    const compChoice = genComputerChoice();
    console.log("comp choice = ", compChoice)

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userwin = true;
        if(userChoice === "rock"){
            compChoice === "paper" ? userwin = false : userwin = true;
        }else if(userChoice === "paper"){
            compChoice === "scissors" ? userwin = false : userwin = true;
        }else if(userChoice === "scissors"){
            compChoice === "rock" ? userwin = false : userwin = true;
        }
        showWinner(userwin, userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        
        playGame(userChoice);
    })
})