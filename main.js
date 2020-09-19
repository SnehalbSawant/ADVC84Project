// Key press events
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	myGamePiece.speedY = -1;
}
function down()
{
	 myGamePiece.speedY = 1;
}
function left()
{
	myGamePiece.speedX = -1;
}
function right()
{
	myGamePiece.speedX = 1;
}
	