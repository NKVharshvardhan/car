canvas=document.getElementById('mycanvas');
ctx=canvas.getContext("2d");

car1_width=150;
car1_height=70;
car1_x=70;
car1_y=10;
car1_image="car1.png";

car2_width=120;
car2_height=70;
car2_x=70;
car2_y=90;
car2_image="car2.png";

background_image="background.png";

function add(){
    background_imgtag=new Image();
background_imgtag.onload=uploadBackground;
background_imgtag.src=background_image;

car1_imgtag=new Image();
car1_imgtag.onload=uploadcar1;
car1_imgtag.src=car1_image;


car2_imgtag=new Image();
car2_imgtag.onload=uploadcar2;
car2_imgtag.src=car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}

function uploadcar1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);

}

function uploadcar2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38')
  { 
  car1_up();
  console.log("up arrow key");
 }

 if(keyPressed == '40')
 { 
 car1_down();
 console.log("down arrow key");
}
if(keyPressed == '37')
{ 
car1_left();
console.log("left arrow key");
}

if(keyPressed == '38')
{ 
car1_right();
console.log("right arrow key");
}

if(keyPressed == '87')
{ 
car2_up();
console.log("up arrow key-2");
}

if(keyPressed == '83')
{ 
car2_down();
console.log("down arrow key-2");
}

if(keyPressed == '65')
{ 
car2_left();
console.log("left arrow key-2");
}
if(keyPressed == '68')
{ 
car2_right();
console.log("right arrow key-2");
}

}
