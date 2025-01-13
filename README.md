## **Rock, Paper, Scissors Game Documentation**

### **Welcome!**  
Ready for a fun challenge? This is a **Rock, Paper, Scissors** game you can play right from your terminal! In this game, you’ll go head-to-head with the computer in the classic showdown of `"rock"`, `"paper"`, or `"scissors"`. The computer will make its move at random—can you outsmart it?

---

### **Game Highlights**  
- 🎲 **Random Computer Choice:** The computer picks `"rock"`, `"paper"`, or `"scissors"` randomly.  
- ✅ **Valid Input Only:** If you accidentally type something else, the game will prompt you until you give a valid choice.  
- 🏆 **Score Tracker:** Keep an eye on your score versus the computer's.  
- 🚪 **Exit Anytime:** Type `"exit"` whenever you want to stop and see your final score.

---

### **Getting Started**

1. **Install Node.js:**  
   If you don’t have Node.js installed, get it here: [https://nodejs.org/](https://nodejs.org/).

2. **Install Dependencies:**  
   Open a terminal and run:
   ```bash
   npm install prompt-sync
   ```

3. **Run the Game:**  
   Save the following script as `index.js`, and run it using:
   ```bash
   node index.js
   ```

---

### **Sample Code**  
Here’s a simple **Node.js Rock, Paper, Scissors** script you can use:
```javascript
const prompt = require('prompt-sync')();
const choices = ["rock", "paper", "scissors"];

let userScore = 0;
let computerScore = 0;

console.log("🎮 Welcome to Rock, Paper, Scissors!\n");

while (true) {
  const userChoice = prompt("Enter rock, paper, or scissors (or type 'exit' to quit): ").toLowerCase();

  if (userChoice === 'exit') {
    console.log(`\nFinal Score: You: ${userScore} | Computer: ${computerScore}`);
    console.log("Goodbye!");
    break;
  }

  if (!choices.includes(userChoice)) {
    console.log("❌ Invalid choice. Please enter rock, paper, or scissors.");
    continue;
  }

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (userChoice === computerChoice) {
    console.log("It's a tie! 🤝\n");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win! 🏆\n");
    userScore++;
  } else {
    console.log("Computer wins! 💻\n");
    computerScore++;
  }

  console.log(`Score: You: ${userScore} | Computer: ${computerScore}\n`);
}
```

---

### **Sample Game Session**  
```
🎮 Welcome to Rock, Paper, Scissors!

Enter rock, paper, or scissors (or type 'exit' to quit): rock
You chose: rock
Computer chose: scissors
You win!

Score: You: 1 | Computer: 0

Enter rock, paper, or scissors (or type 'exit' to quit): paper
You chose: paper
Computer chose: rock
You win!

Score: You: 2 | Computer: 0

Enter rock, paper, or scissors (or type 'exit' to quit): exit
Final Score: You: 2 | Computer: 0
Goodbye!
```

---

### **Have Fun!**  
Feel free to tweak the code to add your own features, such as more rounds, emojis, or sound effects. Enjoy the game! 🎉
