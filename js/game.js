const canvas = document.getElementById("gameWindow");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
ctx.font = "50px Arial";
let start = true;
let game = false;

mousePos = {x: 0, y: 0};
document.addEventListener("mousemove", function(e) {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
});

document.addEventListener("click", function() {
    if(mousePos.x > 1399 && mousePos.x < 1701 && mousePos.y > 249 && mousePos.y < 351) {
        start = false;
        game = true;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
});

const placeholder = document.getElementById("placeholder");
if(start) {
    ctx.fillText("JavaScript Game", 1350, 150);
    ctx.rect(1400, 250, 300, 100);
    ctx.stroke();
    ctx.font = "25px Arial";
    ctx.fillText("Play", 1525, 310);
} else if(game) {
    ctx.drawImage(placeholder, 50, 50, 100, 100);
}