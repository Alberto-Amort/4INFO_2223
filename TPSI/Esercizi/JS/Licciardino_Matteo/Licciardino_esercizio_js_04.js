function modifica_stile()
{
    let T1 = document.querySelector("h1");
    let T2 = document.getElementsByClassName("titoloL2");

    T1.style.color = "red";
    for (var i = 0; i < T2.length; i++) {
        T2[i].style.color = "blue";
        T2[i].style.backgroundColor = "yellow";
        T2[i].style.fontSize = "40px";  
        T2[i].textContent = T2[i].textContent.toUpperCase();
    } 

    let P1 = document.getElementById("par1");
    let P2 = document.getElementById("par4");
    let P3 = document.getElementById("par2");
    let P4 = document.getElementById("par5");
    let P5 = document.getElementById("par8");
    let P6 = document.getElementById("par3");
    let P7 = document.getElementById("par6");
    let P8 = document.getElementById("par7");

    P1.style.color = "red";
    P2.style.color = "red";
    P3.style.backgroundColor = "green";
    P4.style.backgroundColor = "green";
    P5.style.backgroundColor = "green";
    P6.style.backgroundColor = "blue";
    P6.textContent = P6.textContent.toUpperCase();
    P7.textContent = P7.textContent.toUpperCase();
    P8.style.fontStyle = "italic";
}