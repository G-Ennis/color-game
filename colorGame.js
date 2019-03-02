var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //adding initial colors to squares
    squares[i].style.backgroundColor = colors[i];


    //adding click listeners to squares
    squares[i].addEventListener("click", function () {
        //getting the color of the clicked square
        var clickedColor = this.style.backgroundColor;
        //comparing color to picked color
        if (clickedColor === pickedColor) {
            //alert("Correct!");
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        } else {
            //alert("Wrong!");
            //Wrong color will fade out to background
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}
//function to change all square colors to the correct color when the right one is chosen
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
