canvas=document.getElementById('mycanvas');
ctx = canvas.getContext("2d");
roverwidth=100;
roverheight=90;

rover_x=10;
rover_y=10;

background_image="mars.jpg";
rover_image="rover.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}
function uploadbackground(){
    ctx.drawimage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawimage(rover_imgTag,rover_x,rover_y,roverwidth,roverheight);

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keycode;
    console.log(keypressed);

    if(keypressed=='37'){
        left();
        console.log("left");
    }

    if(keypressed=='38'){
        up();
        console.log("up");
    }

    if(keypressed=='39'){
        right();
        console.log("right");
    }

    if(keypressed=='40'){
        down();
        console.log("down");
    }

}



