rightWristX = 0;
rightWristY = 0;

scoreRightWrist = 0;

function setup()
{
    canvas = createCanvas(450, 400);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(450, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 450, 400);

    if (scoreRightWrist > 0.2)
    {
        fill("#3467eb");
        stroke("#fa3123");
        circle(rightWristX, rightWristY, 25);
    }
}

function modelLoaded()
{
    console.log("Model Is Loaded!")
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        
        scoreRightWrist =  results[0].pose.keypoints[10].score;
    }
}