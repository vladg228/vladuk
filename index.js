// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize number of attempts
let attempts = 0;

// Function to start the game
function startGame() {
    // Ask the user to guess a number
    const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

    // Increment the number of attempts
    attempts++;

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        alert(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`);
    } else if (userGuess < randomNumber) {
        alert("Too low. Try again.");
        startGame(); // Recursive call to continue the game
    } else {
        alert("Too high. Try again.");
        startGame(); // Recursive call to continue the game
    }
}

// Start the game
startGame();
