//部屋
var times=0;
var r=0;
var oldX;

const imgarr=["img0","img1","img2"];
let imgs=[];

function setup()
{
    canvas=createCanvas(document.documentElement.scrollWidth,document.documentElement.scrollHeight,WEBGL);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    for(let i=0;i<imgarr.length;i++)
    {
        imgs.push(loadImage("img/"+imgarr[i]+".png"));
    }
}

function windowResized()
{
    resizeCanvas(document.documentElement.scrollWidth,document.documentElement.scrollHeight);
}

function draw()
{
    background(255);
    stroke(0);
    fill(127);

    for(let i=0;i<imgs.length;i++)
    {
        push();
        rotateY(-radians(i*360/imgs.length));
        translate(300,0,0);
        rotateZ(radians(90));
        texture(imgs[i]);
        box(90,1,160);
        pop();
    }

    camera(0,0,0,cos(radians(r)),0,sin(radians(r)),0,1,0);
    
    times++;
}

function mousePressed()
{
    oldX=mouseX;
}

function mouseDragged()
{
    r-=(mouseX-oldX)/7;
    oldX=mouseX;
}