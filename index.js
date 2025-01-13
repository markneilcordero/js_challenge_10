const prompt = require('prompt-sync')({ sigint: true });

const CHOICES = { 1: "rock", 2: "paper", 3: "scissors" };

function getComputerChoice()
{
    const randomNum = Math.floor(Math.random() * 3) + 1;
    return CHOICES[randomNum];
}

function getWinner(userChoice, computerChoice)
{
    if (userChoice === computerChoice) return "It's a draw!";
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    )
    {
        return "You win!";
    }
    return "Computer wins!";
}

function playGame()
{
    console.log("Welcome to Rock, Paper, Scissors!");
    let userScore = 0;
    let computerScore = 0;

    while (true)
    {
        let userChoice = prompt("\nEnter rock, paper, or scissors (or type 'exit' to quit): ").trim().toLowerCase();

        if (userChoice === "exit")
        {
            console.log(`\nFinal Score: You: ${userScore}, Computer: ${computerScore}`);
            console.log("Goodbye!");
            break;
        }

        if (!["rock", "paper", "scissors"].includes(userChoice))
        {
            console.log("Invalid choice. Please enter rock, paper, or scissors.");
            continue;
        }

        const computerChoice = getComputerChoice();
        console.log(`You chose: ${userChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        const result = getWinner(userChoice, computerChoice);
        console.log(result);

        if (result === "You win!") userScore++;
        if (result === "Computer wins!") computerScore++;

        console.log(`\nScore: You: ${userScore} | Computer: ${computerScore}`);
    }
}

playGame();