Webcam.set({
    height:350,
    width:300,
    img_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    document.getElementById("result").innerHTML='<img_id="capture_image" src="'+data_uri+'"/>';
}

console.log('ml5_version:' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

function modelLoaded(){
    console.log("model_loaded");
}