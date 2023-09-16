let currentPlayer = 1;
let score1 = 0;
let score2 = 0;
let gameFinished = false;

function rollDice(player) {
    if (gameFinished) return;

    const dice = Math.floor(Math.random() * 6) + 1;
    const diceElement = document.querySelector(`#player${player} h2`);
    diceElement.textContent = `Player ${player} (Roll: ${dice})`;

    if (player === 1) {
        score1 += dice;
        document.getElementById('score1').textContent = score1;
        document.getElementById('roll1').disabled = true;
        document.getElementById('roll2').disabled = false;
    } else {
        score2 += dice;
        document.getElementById('score2').textContent = score2;
        document.getElementById('roll2').disabled = true;
        document.getElementById('roll1').disabled = false;
    }

    if (score1 >= 30 || score2 >= 30) {
        gameFinished = true;
        document.getElementById('reset').disabled = false;
        const winner = score1 > score2 ? 'Player 1' : 'Player 2';
        alert(`${winner} wins the game!`);
    }
}

function resetGame() {
    currentPlayer = 1;
    score1 = 0;
    score2 = 0;
    gameFinished = false;

    document.getElementById('player1').querySelector('h2').textContent = 'Player 1';
    document.getElementById('player2').querySelector('h2').textContent = 'Player 2';
    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';
    document.getElementById('roll1').disabled = false;
    document.getElementById('roll2').disabled = true;
    document.getElementById('reset').disabled = true;
}

// Initialize the game
resetGame();
