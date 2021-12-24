let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10)

function compareGuesses(human, computer, target) {
    if (Math.abs(human - target) <= Math.abs(computer - target)) {
        return true;
    } else {
        return false;
    }
}