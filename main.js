function setup()
{
    canvas = createCanvas(450, 400);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(450, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw()
{
    image(video, 0, 0, 450, 400);
}

function modelLoaded()
{
    console.log("Model Is Loaded!")
}