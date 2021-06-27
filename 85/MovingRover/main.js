canvas = document.getElementById('my_canvas');
ctx=canvas.getContext("2d");
nasa_mars_images_array=["FRB_486265257EDR_F0481570FHAZ00323M_.jpg", "why.jpg", "mars.jpg"];
randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber);
roverheight=90;
roverwidth=100;
backgroundImg="mars_Image"("randomnumber");
console.log(backgroundImg=""+backgroundImg);
roverImg="rover_Image"(randomnumber);
console.log(roverImg=""+randomImg);
roverX=10;
roverY=10;
function add()
{
    backgroundImgtag=newimage();
    backgroundImgtag.onload=uploadbackground;
    backgroundImgtag.src=backgroundImg
    roverImgtag=newimage();
    roverImgtag.onload=uploadrover;
    roverImgtag.src=roverImg
}
function uploadbackground()
{
    ctx.drawimage(backgroundImgtag, 0, 0, canvaswidth, canvasheight);
}
function uploadrover()
{
    ctx.drawimage(roverImgtag, roverX, roverY, roverwidth, roverheight);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed=e.keycode;
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
        console.log("when up arrow is pressed", x="+roverx+", y="+rovery+");
        uploadbackground();
        uploadrover();
    }
}
function down()
{
    if(roverY<=500)
    {
        roverY=roverY+10;
        console.log("when up arrow is pressed", x="+roverx+", y="+rovery+");
        uploadbackground();
        uploadrover();
    }
}
function left()
{
    if(roverX>=0)
    {
        roverX=roverX-10;
        console.log("when up arrow is pressed", x="+roverx+", y="+rovery+");
        uploadbackground();
        uploadrover();
    }
}
function right()
{
    if(roverX<=700)
    {
        roverX=roverX+10;
        console.log("when up arrow is pressed", x="+roverx+", y="+rovery+");
        uploadbackground();
        uploadrover();
    }
}