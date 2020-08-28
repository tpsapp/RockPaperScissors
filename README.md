# RockPaperScissors
A site that allows you to play Rock Paper Scissors against the computer.

The main.js has comments for what each function does but below is a list of each class and what it's functions are for.

Live Demo: https://www.thomassapp.com/RockPaperScissors

## Classes

### UI Class

Provides helper functions for accessing and controlling the UI.

* UI.initialize = Initializes the UI and global variables.
* UI.showNotification = Updates the h2 element of the notification span with the specified message.
* UI.showWinner = Adds the winner class to the specified choice element.
* UI.showLoser = Adds the loser class to the specified choice element.
* UI.showDraw = Adds the draw class to the specified choice element.
* UI.updateUserScore = Updates the user-score span to show the current score for the user.
* UI.updateCompScore = Updates the comp-score span to show the current score for the comp.
* UI.buttonClick = Handles the clicking of each of the choice elements.

### Game Class

Helper functions for processing the game rules.

* Game.makeCompChoice = Makes a random choice for the computer.
* Game.play = Compares the users choice against the computers choice and determines if it is a win, lose, or draw and updates the score and UI accordingly.

## Events

* Initialize the UI

    document.addEventListener('DOMContentLoaded', UI.initialize);

* Add button clicks for each choice

    document.querySelector('#r').addEventListener('click', () => UI.buttonClick('r'));
    document.querySelector('#p').addEventListener('click', () => UI.buttonClick('p'));
    document.querySelector('#s').addEventListener('click', () => UI.buttonClick('s'));