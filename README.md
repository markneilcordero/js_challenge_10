### **Rock, Paper, Scissors Game**

### **Overview**  
The **Rock, Paper, Scissors Game** is a Node.js CLI program where the user plays against the computer. The computer randomly selects `"rock"`, `"paper"`, or `"scissors"`, and the user enters their choice. The program announces the winner, keeps a running score, and allows the user to exit anytime.

---

### **Features**  
- **Random Computer Choice:** The computer randomly selects `"rock"`, `"paper"`, or `"scissors"`.  
- **Input Validation:** Ensures the user enters a valid choice (`rock`, `paper`, or `scissors`).  
- **Score Tracking:** Keeps track of the scores for both the user and the computer.  
- **Exit Option:** User can type `"exit"` to quit and display the final score.

---

### **Instructions**  
1. Install Node.js: [https://nodejs.org/](https://nodejs.org/)  
2. Open a terminal and run:
   ```bash
   npm install prompt-sync
   ```
3. Save the file as `rockPaperScissors.js` and run the program:
   ```bash
   node rockPaperScissors.js
   ```

---

### **Sample Output**  
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