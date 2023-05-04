var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    ballPosCheck();
    movePaddle();
    drawBricks();
    collisionBricks();
    x += dx;
    y += dy;
}

setInterval(draw, 10);