console.clear();
let counter             = 0;
let timerChangeColors   = null;
let nrOfLoops           = 6;
let bClicked            = true;
let nrOfColors          = 9;
let aHits               = [0, 0, 0]; //raak, mis en te laat
let colors  = ["red", "blue", "yellow", "green", "brown", "purple", "orange", "pink", "aqua"];

function shuffle(arr)
{
    arr.sort(function(a, b){return 0.5 - Math.random()});
    return arr;
}

function setColor()
{
    if(bClicked == false)
    {
        document.getElementById("score1").innerHTML += "<div style='color:darkblue'>Te laat</div>";
        aHits[2]++;
    }
    bClicked = false;

    let elements = document.getElementsByClassName("gameBlok");
    nrOfLoops--;
    
    let x = Math.floor(Math.random() * 9);

    colors = shuffle(colors);

    for (let i = 0; i < elements.length; i++) 
    {
        const element = elements[i];
        element.style.backgroundColor = colors[i];
    }
    //let element = document.getElementById("searchColor");

    document.getElementById("KLEUR").style.backgroundColor = colors[x];  // zorgt ervoor dat KLEUR van kleur veranderd
    if(nrOfLoops <= 0)
    {
        stopThegame();
    }
}

function test(el)
{
        bClicked = true;
        let colorClicked     = el.style.backgroundColor;
        let colordiewezoeken = document.getElementById("KLEUR").style.backgroundColor;
        
        //let elementScore = document.getElementById("score");
        // console.log(colordiewezoeken);
        // console.log(colorClicked + "clicked");

        if (colorClicked == colordiewezoeken)
        {
            document.getElementById("score1").innerHTML += "<div style='color:darkgreen'>Raak</div>";
            aHits[0]++;
        }
        else
        {
            document.getElementById("score1").innerHTML += "<div style='color:red'>Mis</div>";
            aHits[1]++;
        }
}

function startThegame()
{
    timerChangeColors = setInterval(setColor,1000);
    document.getElementById("start").disabled = true;
}

function stopThegame()
{
    clearInterval(timerChangeColors);
    document.getElementById("score2").innerHTML = "<hr><b><i>Eindscore:</i></b><br>" + "raak: " + aHits[0] + "<br>" + "mis: " + aHits[1] + "<br>" + "te laat: " + aHits[2] + "<hr>";
    document.getElementById("start").disabled = false;
}

function fChangeSettings()
{
    mSecinterval = document.getElementById("mSecinterval").value*1000;
    nrOfLoops = document.getElementById("nrOfLoops").value;
    nrOfColors = document.getElementById("nrOfColors").value;
    bChangeBaseC = document.getElementById("bChangeBaseC").value;
}
// function load()
// {
//     let elements = document.getElementsByClassName("gameBlok");

//     for (let i = 0; i < elements.length; i++) 
//     {
//         const element = elements[i];
//         element.addEventListener( "click", function(){test(element)});
//     }

// function doeIets(elm) 
// {
//     if(document.getElementById("testje").innerHTML == document.getElementById("demo").innerHTML) 
//     {
//         console.log("de tekst is gelijk")
//     }
//     else 
//     {
//         console.log("de tekst is NIET gelijk")
//     }
// }
