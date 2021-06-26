canvas = document.getElementById('my_canvas');
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";
rover_image = "rover.png";

roverX=10
roverY=10

function add(){
    background_imgtag=newImage();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image();
    rover_img=newImage();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}
function uploadbackground()
{
    ctx.drawimage(background_imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadrover()
{
    ctx.drawimage(rover_imgtag, roverX, roverY, rover_width, rover_height);
    window.addEventListener("keydown", my_keydown);

}
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
    }
    if(keypressed=='37')
    {
        left();
        console.log("left");
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
    }
}
function up()
{
  if(roverY>=0)
  {
      roverY=roverY-10;
      console.log("when up arrow is pressed ", x= "+roverX+" y= "+roverY+");
      uploadbackground();
      uploadrover();
  }
}
function down(){
    if(roverY<=500)
  {
      roverY= roverY+10;
      console.log("when down arrow is pressed ", x= "+roverX+" y= "+roverY+");
      uploadbackground();
      uploadrover();
  }
}
function left(){
    if(roverX>=0)
  {
      roverY= roverX-10;
      console.log("when left arrow is pressed ", x= "+roverX+" y= "+roverY+");
      uploadbackground();
      uploadrover();
  }
}
function right(){
    if(roverX<=700)
  {
      roverY= roverX+10;
      console.log("when right arrow is pressed ", x= "+roverX+" y= "+roverY+");
      uploadbackground();
      uploadrover();
  }
}