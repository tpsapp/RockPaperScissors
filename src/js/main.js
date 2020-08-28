// Global Variables
var userScore = 0;
var compScore = 0;

// Classes

// UI Class: Provides helper functions for accessing and controlling the UI.
// UI.initialize = Initializes the UI and global variables.
// UI.showNotification = Updates the h2 element of the notification span with the specified message.
// UI.showWinner = Adds the winner class to the specified choice element.
// UI.showLoser = Adds the loser class to the specified choice element.
// UI.showDraw = Adds the draw class to the specified choice element.
// UI.updateUserScore = Updates the user-score span to show the current score for the user.
// UI.updateCompScore = Updates the comp-score span to show the current score for the comp.
// UI.buttonClick = Handles the clicking of each of the choice elements.

class UI {
    static initialize() {
        userScore = 0;
        compScore = 0;
        document.querySelector('#notification > h2').innerHTML = 'Make Your Move!'
    }

    static showNotification(message) {
        document.querySelector('#notification > h2').innerHTML = message;
    }

    static showWinner(choice) {
        switch (choice) {
            case 'r':
                document.querySelector('#r').classList.add('winner');
                setTimeout(() => document.querySelector('#r').classList.remove('winner'), 600);
                break;
            case 'p':
                document.querySelector('#p').classList.add('winner');
                setTimeout(() => document.querySelector('#p').classList.remove('winner'), 600);
                break;
            case 's':
                document.querySelector('#s').classList.add('winner');
                setTimeout(() => document.querySelector('#s').classList.remove('winner'), 600);
                break;
        }
    }

    static showLoser(choice) {
        switch (choice) {
            case 'r':
                document.querySelector('#r').classList.add('loser');
                setTimeout(() => document.querySelector('#r').classList.remove('loser'), 600);
                break;
            case 'p':
                document.querySelector('#p').classList.add('loser');
                setTimeout(() => document.querySelector('#p').classList.remove('loser'), 600);
                break;
            case 's':
                document.querySelector('#s').classList.add('loser');
                setTimeout(() => document.querySelector('#s').classList.remove('loser'), 600);
                break;
        }
    }

    static showDraw(choice) {
        switch (choice) {
            case 'r':
                document.querySelector('#r').classList.add('draw');
                setTimeout(() => document.querySelector('#r').classList.remove('draw'), 600);
                break;
            case 'p':
                document.querySelector('#p').classList.add('draw');
                setTimeout(() => document.querySelector('#p').classList.remove('draw'), 600);
                break;
            case 's':
                document.querySelector('#s').classList.add('draw');
                setTimeout(() => document.querySelector('#s').classList.remove('draw'), 600);
                break;
        }
    }

    static updateUserScore() {
        document.querySelector('#user-score').innerHTML = userScore;
    }

    static updateCompScore() {
        document.querySelector('#comp-score').innerHTML = compScore;
    }

    static buttonClick(choice) {
        Game.play(choice);
    }
}

// Game Class: Helper functions for processing the game rules.
// Game.makeCompChoice = Makes a random choice for the computer.
// Game.play = Compares the users choice against the computers choice and determines if it is a win, lose, or draw and updates the score and UI accordingly.

class Game {
    static makeCompChoice() {
        const choices = ['r', 'p', 's'];
        const choice = Math.floor(Math.random() * 3);
        return choices[choice];
    }

    static play(userChoice) {
        const compChoice = this.makeCompChoice();

        switch (userChoice + compChoice) {
            case 'rs':
            case 'pr':
            case 'sp':
                userScore++;
                UI.updateUserScore();
                UI.showNotification('🎉 You Win! 🎉');
                UI.showWinner(userChoice);
                UI.showLoser(compChoice);
                break;
            case 'rp':
            case 'ps':
            case 'sr':
                compScore++;
                UI.updateCompScore();
                UI.showNotification('👎 You Lose! 👎');
                UI.showWinner(compChoice);
                UI.showLoser(userChoice);
                break;
            default:
                UI.showNotification('🤝 It\'s a Draw! 🤝');
                UI.showDraw(userChoice);
                break;
        }
    }
}

// Events

// Initialize the UI
document.addEventListener('DOMContentLoaded', UI.initialize);

// Add button clicks for each choice
document.querySelector('#r').addEventListener('click', () => UI.buttonClick('r'));
document.querySelector('#p').addEventListener('click', () => UI.buttonClick('p'));
document.querySelector('#s').addEventListener('click', () => UI.buttonClick('s'));