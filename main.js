obstatus = "";
object_name = "";
objects = [];

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
}

function start() {
    objectdetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("object_name").value;
}

function modelloaded() {
    console.log("modelloaded");
    obstatus = "true";
}

function draw() {
    image(video, 0, 0, 400, 400);

    if (obstatus != "") {

        objectdetector.detect(video, gotresults);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects Detected " + objects.length;
            fill("red");
            textSize(30);
            text(objects[i].label, objects[i].x, objects[i].y);
            noFill();
            stroke("green");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

            if (objects[i].label == object_name) {
                video.stop();
                objectdectector.detect(gotresults);
                document.getElementById("object_status").innerHTML = object_name;
            }
            else {
                document.getElementById("object_status").innerHTML = object_name + "not found";

            }
        }
    }
}

function gotresults(error, results) {
    if (error) {
        console.log(error);
    }
    objects = results;
    console.log(results);
}
