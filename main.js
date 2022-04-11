function start() {
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier =ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Q3ZnJxiRo/model.json", modelready)
}
function modelready() {
    classifier.classify(gotresults)
    console.log("Model is Ready for website")
}
function gotresults(error,results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        document.getElementById("result").innerHTML = "I hear you... You are saying - " + results[0].label
        document.getElementById("confidence").innerHTML = "ACCURACY IS " + (results[0].confidence * 100).toFixed(2) + "%"
        img1=document.getElementById("img1")
        img2=document.getElementById("img2")
        img3=document.getElementById("img3")
        img4=document.getElementById("img4")
        if (results[0].label == "Snap") {
            img1.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        } else if (results[0].label == "Clap") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.gif"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        else if (results[0].label == "Table Bang") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.gif"
            img4.src = "aliens-04.png"
        }
        else {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.gif"
        }
    }
    
}