// Randomly generate a number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Function to check if the guess is correct
function checkGuess(userGuess) {
    attempts++;
    if (userGuess > randomNumber) {
        return "Too high!";
    } else if (userGuess < randomNumber) {
        return "Too low!";
    } else {
        return `Correct! It took you ${attempts} attempts.`;
    }
}

// Event listener for the "Guess" button
document.getElementById("guessButton").addEventListener("click", function() {
    // Get the user's input
    let userGuess = parseInt(document.getElementById("guessInput").value);
    
    // If the input is a valid number
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("feedback").textContent = "Please enter a number between 1 and 100.";
        document.getElementById("result").textContent = '';
    } else {
        // Display feedback for the user's guess
        let result = checkGuess(userGuess);
        document.getElementById("result").textContent = result;
        document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
        
        // If correct, display a button to restart
        if (userGuess === randomNumber) {
            document.getElementById("guessButton").textContent = "Play Again";
            document.getElementById("guessButton").addEventListener("click", restartGame);
        } else {
            document.getElementById("feedback").textContent = result;
        }
    }
});

// Function to restart the game
function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("result").textContent = '';
    document.getElementById("attempts").textContent = '';
    document.getElementById("feedback").textContent = '';
    document.getElementById("guessInput").value = '';
    document.getElementById("guessButton").textContent = "Guess";
}
