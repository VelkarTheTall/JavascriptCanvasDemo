var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var centerX = width/2;
var centerY = height/2;
var ray = 80;
var time = 0;

function drawCircle( parX, parY, fillStyle = 'green' ) {
  var radius = 30;
  context.beginPath();
  context.arc( parX, parY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = fillStyle;
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = '#003300';
  context.stroke();
}

// Takes time in ms, determines position accordingly.
function spinBall( Time = 0 ) {
  var angle = 0;
  var posX = 0;
  var posY = 0;
  // Note to self, uses radians.
  posY = Math.sin( Time * Math.PI ) * ray + centerY;
  posX = Math.cos( Time * Math.PI ) * ray + centerX;

  drawCircle( posX, posY );
  drawCircle( posY, posX, 'cyan' );
}

function drawOnTime() {
  // Clear the canvas.
  context.clearRect(0, 0, canvas.width, canvas.height);
  spinBall( time );
  time += 1/8;
}

function main() {
  //drawCircle( 10, 10 ); // Basic test
  setInterval(drawOnTime, 40);
}

main();
