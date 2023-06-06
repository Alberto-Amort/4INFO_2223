function modifica_stile()
{
    let tit_1 = document.getElementsByTagName("h1");

    for (let i = 0; i < tit_1.length; i++)
    {
        let elem = tit_1[i];
        elem.style.color = "red";
    }

    let tit_2 = document.getElementsByTagName("h2");

    for (let i = 0; i < tit_2.length; i++)
    {
        let elem = tit_2[i];
        elem.style.color = "blue";
        elem.style.backgroundColor = "yellow";
        elem.style.fontSize = "40px";
        elem = elem.style.textTransform.toUpperCase();
        
        
    }

    let pr1 = document.getElementById("par1");
    let pr4 = document.getElementById("par4");

    pr1.style.color = "red";
    pr4.style.color = "red";
    

    let pr2 = document.getElementById("par2");
    let pr5 = document.getElementById("par5");
    let pr8 = document.getElementById("par8");

    pr2.style.background = "lightgreen";
    pr5.style.background = "lightgreen";
    pr8.style.background = "lightgreen";


    let pr3 = document.getElementById("par3");

    pr3 = pr3.style.textTransform.toUpperCase();
    pr3.style.background = "lightblue";


    let pr6 = document.getElementById("par6");

    pr6 = pr6.style.textTransform.toUpperCase();


    let pr7 = document.getElementById("par7");

    pr7.style.fontStyle = "italic";
}