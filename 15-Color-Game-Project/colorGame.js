// initial variables
var colors = [];
var numSquares = 6;
var pickedColor;
// selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var popup = document.querySelector("#myPopup");
var h2pBtn = document.querySelector("#how2play");
var closePopup = document.querySelector(".close");

// run initial function when page is loaded
init();

function init(){
    // mode button even listeners
    setupModeButtons();
    // game squares event listeners
    setupSquares();
    // initialize the game (colors, pickedColor, displays)
    reset();
    // add reset button listener
    resetButton.addEventListener("click", function(){
        reset();
    });
}

function changeColors(color) {
    // loop thru all squares - change each square to match given color
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // repeat num times
    for (var i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return array
    return arr;
}

function randomColor() {
    // pick a 'red' from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick a 'green' from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick a 'blue' from 0 to 255
    var b = Math.floor(Math.random() * 256);
    var colorString = "rgb(" + r + ", " + g + ", " + b + ")";
    // return random color string
    return colorString;
}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick new random color from color-array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    // reset h1 background color to original 'steelblue'
    // h1.style.backgroundColor = "steelblue";
    h1.style.backgroundColor = "#191970";
    // change resetBtn text back to 'New Colors'
    resetButton.textContent = "New Colors";
    // remove display message for new game
    messageDisplay.textContent = "";   
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            }
            else if (this.textContent === "Medium") {
                numSquares = 6;
            }
            else {
                numSquares = 9;
            }
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++){
        // add clickListeners to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to picked color
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            }
            else{
                // this.style.backgroundColor = "#232323";
                this.style.backgroundColor = "#FFEBCD";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}


// easy button click listener
// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     // display 3 new colors & hide last-3 squares
//     for (var i = 0; i < squares.length; i++){
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hard button click listener
// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     // display 3 new colors & hide last-3 squares
//     for (var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });