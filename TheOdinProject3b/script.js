const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button');

// Function to create the grid
function createGrid(numSquaresPerSide) {
  // Clear existing grid
  container.innerHTML = '';

  // Calculate square size based on number of squares per side
  const squareSize = 960 / numSquaresPerSide;

  // Create grid squares
  for (let i = 0; i < numSquaresPerSide * numSquaresPerSide; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
}

// Initial grid creation
createGrid(16);

// Event listener for the reset button
resetButton.addEventListener('click', function() {
  let newSize = prompt('Enter number of squares per side (max 100):');
  newSize = parseInt(newSize);
  
  // Validate input
  if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  createGrid(newSize);
});
