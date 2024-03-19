function setup(){
    canvas = createCanvas(550, 500);
    canvas.position(1000, 250)

    video = createCapture(VIDEO);
    video.position(250, 250);
    video.size(550, 500)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

leftwristx = 0;
rightwristx = 0;
difference = 0;

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        console.log("Left Wrist = " + leftwristx + "Right Wrist = " + rightwristx + "Difference = " + difference)

    }
}

function draw(){
    background("#7be898");
    fill("#9a35de");
    text("Texts", 50, 250);
    textSize(difference)
    document.getElementById("output").innerHTML = "Size = " + difference + " px"
}