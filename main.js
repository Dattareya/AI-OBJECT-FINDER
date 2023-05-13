obstatus="";
object_name="";

function setup() {
    canvas=createCanvas(400,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
}

function start()
{
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    object_name=document.getElementById("object_name").value;
}

function modelloaded()
{
    console.log("modelloaded");
    obstatus="true";
}

function draw()
{
    image(video,0,0,400,400);
}
