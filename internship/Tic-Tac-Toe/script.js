const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
const statusText = document.getElementById('status');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Function to handle cell click
function handleCellClick(e) {
  const index = e.target.dataset.cell;

  if (board[index] !== '' || !gameActive) return; // Cell already filled or game over

  // Update the board and the cell
  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  // Check for winner
  if (checkWinner()) {
    gameActive = false;
    statusText.textContent = `Player ${currentPlayer} wins!`;
  } else if (board.every(cell => cell !== '')) {
    // Check for a draw
    gameActive = false;
    statusText.textContent = 'It\'s a draw!';
  } else {
    // Change player turn
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `Player ${currentPlayer}'s turn`;
  }
}

// Function to check if a player has won
function checkWinner() {
  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

// Function to reset the game
function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  statusText.textContent = `Player X's turn`;
  cells.forEach(cell => {
    cell.textContent = '';
  });
}

// Add event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
