let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
  
canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

let speed = 15;

let input = 45;

let angle = (Math.PI/180)*input;

let arc_cord = {
    x:20,
    y:20,
    radius:10,
    start:(Math.PI/180)*0,
    stop:(Math.PI/180)*360,
    clock:false
}

let add_X = Math.cos(angle)*speed;
let add_Y = Math.sin(angle)*speed;


function update(){
    arc_cord.x += add_X;
    arc_cord.y += add_Y;
}

function draw_arc(){
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(arc_cord.x,arc_cord.y,arc_cord.radius,arc_cord.start,arc_cord.stop,arc_cord.clock);
    ctx.fill();
    ctx.closePath();

}

function update_angle(){
    if(arc_cord.x>canvas.width || arc_cord.x < 0){
        input = 180 - input;
        angle = (Math.PI/180)*input;
        add_X = Math.cos(angle)*speed;
        add_Y = Math.sin(angle)*speed;

    }else if(arc_cord.y > canvas.height || arc_cord.y < 0){
        input = 360 - input;
        angle = (Math.PI/180)*input;
        add_X = Math.cos(angle)*speed;
        add_Y = Math.sin(angle)*speed;

    }
}


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    update();
    draw_arc();
    update_angle();
    requestAnimationFrame(draw);
}

draw();