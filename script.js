let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10)

function compareGuesses(human, computer, target) {
    if (getAbsoluteDistance(human, target) <= getAbsoluteDistance(computer, target)) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++

const advanceRound = () => currentRoundNumber++

const getAbsoluteDistance = (guess, target) => Math.abs(guess - target)

