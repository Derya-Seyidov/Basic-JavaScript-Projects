// ===============================
// TIC TAC TOE - JavaScript
// Requirements covered:
// - 0-8 shows at start
// - Click -> X appears, computer places O
// - Win -> green line drawn on canvas
// - Tie or win -> auto reset, 0-8 returns
// ===============================

let activePlayer = "X";          // Current player (Human is X)
let selectedSquares = [];        // Stores moves like ["0x","4o","8x"...]
let gameActive = true;           // Prevents clicks after game ends

// When the page loads, show the 0-8 indexes
window.onload = () => {
  showIndexes();
};

// Shows indexes 0-8 inside each square (before any move)
function showIndexes() {
  for (let i = 0; i < 9; i++) {
    const sq = document.getElementById(String(i));
    sq.dataset.played = "false";     // Custom flag to know if square is used
    sq.innerHTML = String(i);        // Show the index number
    sq.style.color = "#9a9a9a";      // Light gray number
  }
}

// Called when user clicks a square
function placeXorO(squareNumber) {
  // Stop if game is over
  if (!gameActive) return;

  const sq = document.getElementById(squareNumber);

  // Stop if this square was already played
  if (sq.dataset.played === "true") return;

  // Mark square as played and place X
  sq.dataset.played = "true";
  sq.innerHTML = `<span class="mark x">X</span>`;

  // Save this move into our array (example: "0x")
  selectedSquares.push(squareNumber + "x");

  // Check if this move wins or ties the game
  checkWinConditions();
  if (!gameActive) return;

  // Disable clicks briefly while computer chooses
  disableClick();
  setTimeout(computersTurn, 600);
}

// Computer places O on a random empty square
function computersTurn() {
  if (!gameActive) return;

  // Find all empty squares
  const empty = [];
  for (let i = 0; i < 9; i++) {
    const sq = document.getElementById(String(i));
    if (sq.dataset.played !== "true") empty.push(String(i));
  }

  // If no empty squares, return
  if (empty.length === 0) return;

  // Choose a random empty square
  const choice = empty[Math.floor(Math.random() * empty.length)];
  const sq = document.getElementById(choice);

  // Place O
  sq.dataset.played = "true";
  sq.innerHTML = `<span class="mark o">O</span>`;

  // Save move like "4o"
  selectedSquares.push(choice + "o");

  // Check win/tie after computer move
  checkWinConditions();
}

// Checks all win conditions for X and O
function checkWinConditions() {
  // ---- X WIN CONDITIONS ----
  if (arrayIncludes("0x","1x","2x")) { drawWinLine(50, 100, 558, 100); return; }
  if (arrayIncludes("3x","4x","5x")) { drawWinLine(50, 304, 558, 304); return; }
  if (arrayIncludes("6x","7x","8x")) { drawWinLine(50, 508, 558, 508); return; }
  if (arrayIncludes("0x","3x","6x")) { drawWinLine(100, 50, 100, 558); return; }
  if (arrayIncludes("1x","4x","7x")) { drawWinLine(304, 50, 304, 558); return; }
  if (arrayIncludes("2x","5x","8x")) { drawWinLine(508, 50, 508, 558); return; }
  if (arrayIncludes("6x","4x","2x")) { drawWinLine(100, 508, 510, 90); return; }
  if (arrayIncludes("0x","4x","8x")) { drawWinLine(100, 100, 520, 520); return; }

  // ---- O WIN CONDITIONS ----
  if (arrayIncludes("0o","1o","2o")) { drawWinLine(50, 100, 558, 100); return; }
  if (arrayIncludes("3o","4o","5o")) { drawWinLine(50, 304, 558, 304); return; }
  if (arrayIncludes("6o","7o","8o")) { drawWinLine(50, 508, 558, 508); return; }
  if (arrayIncludes("0o","3o","6o")) { drawWinLine(100, 50, 100, 558); return; }
  if (arrayIncludes("1o","4o","7o")) { drawWinLine(304, 50, 304, 558); return; }
  if (arrayIncludes("2o","5o","8o")) { drawWinLine(508, 50, 508, 558); return; }
  if (arrayIncludes("6o","4o","2o")) { drawWinLine(100, 508, 510, 90); return; }
  if (arrayIncludes("0o","4o","8o")) { drawWinLine(100, 100, 520, 520); return; }

  // ---- TIE CONDITION ----
  if (selectedSquares.length >= 9) {
    // Play tie sound if file exists
    audio("./media/tie.mp3");
    gameActive = false;
    // Reset after short delay
    setTimeout(resetGame, 700);
  }
}

// Returns true if all three moves exist in selectedSquares
function arrayIncludes(a, b, c) {
  return (
    selectedSquares.includes(a) &&
    selectedSquares.includes(b) &&
    selectedSquares.includes(c)
  );
}

// Draws an animated GREEN win line on the canvas
function drawWinLine(x1, y1, x2, y2) {
  gameActive = false;
  disableClick();

  // Play win sound if file exists
  audio("./media/winGame.mp3");

  const canvas = document.getElementById("win-lines");
  const ctx = canvas.getContext("2d");

  let currentX = x1;
  let currentY = y1;

  // Line styling
  ctx.lineWidth = 10;
  ctx.strokeStyle = "limegreen";
  ctx.lineCap = "round";

  // Animate the line drawing
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    const dx = (x2 - x1) / 20;
    const dy = (y2 - y1) / 20;

    // Keep moving toward the endpoint
    if (Math.abs(currentX - x2) > Math.abs(dx) || Math.abs(currentY - y2) > Math.abs(dy)) {
      currentX += dx;
      currentY += dy;
      requestAnimationFrame(animate);
    } else {
      // After line finishes, reset game
      setTimeout(resetGame, 900);
    }
  }

  animate();
}

// Temporarily disables clicking (so user can't spam click during computer turn)
function disableClick() {
  document.body.style.pointerEvents = "none";
  setTimeout(() => {
    document.body.style.pointerEvents = "auto";
  }, 700);
}

// Plays an audio file (safe if file is missing)
function audio(path) {
  try {
    const sound = new Audio(path);
    sound.play();
  } catch (e) {}
}

// Resets board and brings back 0-8
function resetGame() {
  // Restore numbers 0-8
  showIndexes();

  // Clear win line canvas
  const canvas = document.getElementById("win-lines");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Reset state variables
  selectedSquares = [];
  activePlayer = "X";
  gameActive = true;
}
