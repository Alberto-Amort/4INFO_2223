
function modifica_stile() {
    
    let t1 = document.getElementsByClassName("titoloL1");

    for(let i = 0; i < t1.length; i++){
        t1[i].style.color = "red";
    }

    let t2 = document.getElementsByClassName("titoloL2");

    for(let i = 0; i < t2.length; i++){
        t2[i].style.color = "blue";
        t2[i].style.backgroundColor = "yellow"
        t2[i].style.fontSize = "40px";
        t2[i].textContent = t2[i].textContent.toUpperCase();
    }

    let P1 = document.getElementById("par1");

    P1.style.color = "red";

    let P4 = document.getElementById("par4");

    P4.style.color = "red";

    let P2 = document.getElementById("par2");

    P2.style.backgroundColor = "lightgreen";

    let P5 = document.getElementById("par5");

    P5.style.backgroundColor = "lightgreen";

    let P8 = document.getElementById("par8");

    P8.style.backgroundColor = "lightgreen";

    let P3 = document.getElementById("par3");

    P3.style.backgroundColor = "lightblue";
    P3.textContent = P3.textContent.toUpperCase();

    let P6 = document.getElementById("par6");

    P6.textContent = P6.textContent.toUpperCase();

    let par7 = document.getElementById("par7");

    par7.style.fontStyle = "Italic";




    


    
    
}