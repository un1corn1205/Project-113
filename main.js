function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO)
    video.hide();
    tint_colour="";
}

function draw(){
    fill("red");
    stroke("green");
    circle(50,50,80);
    circle(580,50,80);
    circle(50,430,80);
    circle(580,430,80);

    fill("green");
    stroke("blue");
    rect(90,40,453,20);
    rect(90,420,453,20);
    rect(40,90,20,300);
    rect(570,90,20,300);

    image(video,150,100,350,270);
}