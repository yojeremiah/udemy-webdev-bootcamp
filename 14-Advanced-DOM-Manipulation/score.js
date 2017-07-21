var p1Button = document.querySelector("#p1-btn");
var p2Button = document.querySelector("#p2-btn");
var resetButton = document.querySelector("#reset-btn");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var maxScoreDisplay = document.querySelector("#maxScoreDisplay");
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var numInput = document.querySelector("#maxScoreInput");
var gameOver = false;

// p1-btn listener
p1Button.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        if(p1Score === maxScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
    
});

// p2-btn listener
p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === maxScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

//reset-btn listener
resetButton.addEventListener("click", function(){
    resetGame();
});

numInput.addEventListener("change", function(){
    maxScoreDisplay.textContent = this.value;
    maxScore = Number(this.value);
    resetGame(); 
});

function resetGame() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}