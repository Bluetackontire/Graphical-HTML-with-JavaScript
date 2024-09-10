var c = document.getElementById("myCanvasSquareLines");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

var c = document.getElementById("myCanvasCircle");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 50, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvasText");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 20, 60);

var c = document.getElementById("myCanvasTextStroke");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 20, 60);

function myFunction() {
  alert("The date is " + Date());
}
function textFunction() {
  document.getElementById('demo').innerHTML = Date();
  document.getElementById('demo').style.color = "blue";
  document.getElementById('demo').style.fontSize = "25px";
}