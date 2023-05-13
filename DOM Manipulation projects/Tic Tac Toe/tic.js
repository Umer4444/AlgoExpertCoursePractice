// Write your code here

const BOARD_WIDTH = 3;

let boardState = generateEmptyBoardState();
let currentPlayer = 1;
let numMovesDone = 0;

const gameHeading = document.getElementById('game-heading'); // corrected typo: 'documnet' to 'document'
const gameSquares = document.querySelectorAll('.game-square');
const restartButton = document.getElementById('restart-button');

gameSquares.forEach((gameSquare, i) => { // corrected syntax: =. to =>
    gameSquare.addEventListener('click', () => {
        const row = Math.floor(i / BOARD_WIDTH);
        const col = i % BOARD_WIDTH;
        makeMove(gameSquare, row, col);
    })
})

restartButton.addEventListener('click', restartGame);

function makeMove(gameSquare, row, col) {
    gameSquare.textContent = currentPlayer === 1 ? 'X' : 'O';
    gameSquare.disabled = true;
    numMovesDone++;
    boardState[row][col] = currentPlayer;

    if (didPlayerWin()) {
        gameHeading.textContent = `Player ${currentPlayer} Won!`;
        endGame();
    } else if (numMovesDone >= BOARD_WIDTH * BOARD_WIDTH) {
        gameHeading.textContent = 'Tie Game!';
        endGame();
    } else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        setCurrentPlayerHeading();
    }
}

function didPlayerWin() {
    const rows = [0, 1, 2];
    const wonHorizontal = rows.some(row => { // corrected variable name: wonHorinzontal to wonHorizontal
        return (
            boardState[row][0] === currentPlayer &&
            boardState[row][1] === currentPlayer &&
            boardState[row][2] === currentPlayer
        )
    });

    const cols = [0, 1, 2];
    const wonVertical = cols.some(col => { // corrected variable name: col to cols
        return (
            boardState[0][col] === currentPlayer &&
            boardState[1][col] === currentPlayer &&
            boardState[2][col] === currentPlayer
        )
    });

    const wonTopLeftToBottomRight =
        boardState[0][0] === currentPlayer &&
        boardState[1][1] === currentPlayer &&
        boardState[2][2] === currentPlayer;

    const wonTopRightToBottomLeft =
        boardState[0][2] === currentPlayer &&
        boardState[1][1] === currentPlayer &&
        boardState[2][0] === currentPlayer;

    return wonHorizontal || wonVertical || wonTopLeftToBottomRight || wonTopRightToBottomLeft;
}

function endGame() {
    restartButton.style.display = 'block';
    gameSquares.forEach(gameSquare => {
        gameSquare.disabled = true;
    })
}

function setCurrentPlayerHeading() { // corrected function name: currentPlayerHeading to setCurrentPlayerHeading
    gameHeading.textContent = `Player ${currentPlayer}'s Turn`;
}

function restartGame() {
    boardState = generateEmptyBoardState();
    currentPlayer = 1;
    numMovesDone = 0;
    setCurrentPlayerHeading();
    gameSquares.forEach(gameSquare => { // corrected variable name: gameSquares to gameSquare
        gameSquare.textContent = '';
        gameSquare.disabled = false;
    });
    restartButton.style.display = 'none';
}

function generateEmptyBoardState() {
    return new Array(BOARD_WIDTH).fill().map(() => new Array(BOARD_WIDTH).fill('')); // initialized all array elements with empty strings
}
