function fActie(inp)
{
    let waarde = inp.value;
    console.log(inp.placeholder + " ingevuld: " + waarde);
    
    //console.log(inp.classList)
    if(inp.classList.contains("min2Char"))
    {      
        if(waarde.length >= 2)
        {
            inp.style.backgroundColor = "#AAFFAA";
            document.getElementById(inp.id + "voornaamError").innerHTML = "";
        }
        else
        {
            inp.style.backgroundColor = "#FFAAAA";
            document.getElementById(inp.id + "voornaamError") = " moet minimaal 2 characters bevatten!";
        }
    }
    if(inp.classList.contains("max10Char"))
    {      
        if(waarde.length <= 10)
        {
            inp.style.backgroundColor = "#AAFFAA";
            document.getElementById(inp.id + "voornaamError").innerHTML = "";
        }
        else
        {
            inp.style.backgroundColor = "#FFAAAA";
            document.getElementById(inp.id + "voornaamError") = " moet minimaal 2 characters bevatten!";
        }
    }

    if(inp.classList.contains("postcodeError"))
    {
        let regex = /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i;

        if(regex.test(inp.value))
        {
            inp.style.backgroundColor = "#AAFFAA";
            document.getElementById(inp.id + "postcodeError").innerHTML = "";
        }
        else
        {
            inp.style.backgroundColor = "#FFAAAAA"
            document.getElementById(inp.id + "postcodeError").innerHTML = inp.placeholder +  " heeft geen geldige waarde ";
        }
    }
}

function fCheckField(elm)
{
    let bVerstuur = true;
    let idError = "error_" + elm.name;

    if (elm.classlist.contains("min2Char") && elm.value.length < 2)
    {

    }

    if (elm.classList.contains("email"))
    {

    }

    if (elm.classList.contains("postcode"))
    {
        
    }

    if (elm.name == "gebdat")
    {

    }
}


function fVoorVersturen(event, myform)
{
    event.preventDefault();
    console.log("fVoorVersturen aangeroepen")


    var bVerstuur = true;


    if (fCheckField(document.getElementById('voornaam'      )) == false)    {bVerstuur = false};
    if (fCheckField(document.getElementById('tussenvoegsel' )) == false)    {bVerstuur = false};
    if (!fCheckField(document.getElementById('achternaam'   )))             {bVerstuur = false};
    if (!fCheckField(document.getElementById('email'        )))             {bVerstuur = false};
    if (!fCheckField(document.getElementById('postcode'     )))             {bVerstuur = false};

    console.log("bVerstuur" + bVerstuur);

    if (bVerstuur)
    {
        //alert("de website wordt verstuurd, alles is gevalideerd.\nHierna wordt het scherm ververst");
        myform.submit();
    }
    else
    {
        alert('');
    }
}

// function validateExpression(name, regex)
// {
    
// }

// validateExpression('postcode', /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i);
// validateExpression('email', );

// if(inp.classlist.contains("min2Char"))
// {

// }
// if(inp.classlist.contains("max10Char"))
// {
    
// }


  // if(inp.id == "voornaam")
    // {
    //     // moet minimaal 2 characters bevatten
    //     // kleurt rood < 2 characters
    //     // kleurt groen bij >= 2 characters
    //     let l = waarde.length
    //     //console.log("lengte van " +waarde+" = " + l);
    //     if(l >= 2)
    //     {
    //         inp.style.backgroundColor = "#AAFFAA";
    //         document.getElementById(inp.id + "Error").innerHTML = inp.placeholder + " moet minimaal 2 characters bevatten!";
    //     }
    //     else
    //     {
    //         inp.style.backgroundColor = "#FFAAAA";
    //         document.getElementById(inp.id + "Error").innerHTML = inp.placeholder + " moet minimaal 2 characters bevatten!";

    //     }
    // }