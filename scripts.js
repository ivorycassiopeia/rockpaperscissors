let playerScore = 0;
let npcScore = 0;
console.log('Game started!');

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const npcChoice = choices[Math.floor(Math.random() * 3)];

    const result = getResult(playerChoice, npcChoice);
    updateScore(result);
    displayResult(playerChoice, npcChoice, result);
}

function getResult(player, npc) {
    if (player === npc) return 'tie';
    if (
        (player === 'rock' && npc === 'scissors') ||
        (player === 'paper' && npc === 'rock') ||
        (player === 'scissors' && npc === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}

function updateScore(result) {
    if (result === 'win') playerScore++;
    if (result === 'lose') npcScore++;
    document.getElementById('score').textContent = `Player: ${playerScore} | NPC: ${npcScore}`;
    console.log(result);
}

function displayResult(player, npc, result) {
    const resultElement = document.getElementById('result');
    let message = `You played ${player}, NPC played ${npc}. `;
    
    if (result === 'tie') {
        message += "Tie!";
    } else if (result === 'win') {
        message += "You won this round! Pick again!";
    } else {
        message += "The NPC got you this round! Try again!";
    }
    
    resultElement.textContent = message;
}

function resetScores() {
    playerScore = 0;
    npcScore = 0;
    updateScore();
    console.log('Scores reset!');
}