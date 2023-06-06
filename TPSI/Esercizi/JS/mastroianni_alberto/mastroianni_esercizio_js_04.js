function modifica_stile()
{
    let a = document.querySelector("h1");
    let b = document.getElementsByClassName("titoloL2");

 a.style.color = "red";
    for (var i = 0; i < b.length; i++) {
        b[i].style.color = "blue";
        b[i].style.backgroundColor = "yellow";
        b[i].style.fontSize = "40px";  
        b[i].textContent = b[i].textContent.toUpperCase();
    } 

    let e8 = document.getElementById("par7");
    let e7 = document.getElementById("par6");
    let e6 = document.getElementById("par3");
    let e5 = document.getElementById("par8");
    let e4 = document.getElementById("par5");
    let e3 = document.getElementById("par2");
    let e2 = document.getElementById("par4");
    let e1 = document.getElementById("par1");

    e1.style.color = "red";
    e2.style.color = "red";
    e3.style.backgroundColor = "green";
    e4.style.backgroundColor = "green";
    e5.style.backgroundColor = "green";
    e6.style.backgroundColor = "blue";
    e6.textContent = e6.textContent.toUpperCase();
    e7.textContent = e7.textContent.toUpperCase();
    e8.style.fontStyle = "italic";
}