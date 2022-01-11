function start_sound()
{
    navigator.mediaDevices.getUserMedia({
        audio : true
    });
c = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EK9jh0xbb/model.json", modelReady);
}

function modelReady()
{
    c.classify(gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    } else 
    {
        console.log(results);
        document.getElementById("sound_name").innerHTML = results[0].label;
        perc = results[0].confidence * 100;
        document.getElementById("accuracy").innerHTML = perc.toFixed(2) + " % ";

        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;
        document.getElementById("sound_name").style.color = "rgb("+r+","+ g +"," +b+")";
        document.getElementById("accuracy").style.color = "rgb("+r+","+ g +"," +b+")";

        i1 = document.getElementById("img1");
        

        if (results[0].label == "Background Noise")
        {
          i1.src="Prompt.png";
        } else if (results[0].label == "Barking")
        {
            i1.src="Dog.jpg";
        } else if (results[0].label == "Meowing")
        {
            i1.src="Cat.png";
        } else if (results[0].label == "Chirping")
        {
            i1.src="Bird.jpg";
        } else if (results[0].label == "Roaring")
        {
            i1.src = "Lion.jpg";
        } else if (results[0].label == "Mooing")
        {
            i1.src="Cow.jpg";
        }
}
}