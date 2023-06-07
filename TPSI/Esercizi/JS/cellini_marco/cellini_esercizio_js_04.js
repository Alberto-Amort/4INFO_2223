function modifica_stile() {
    lv1 = document.getElementsByClassName("titoloL1");
    lv1[0].style.color = "red";

    lv2 = document.getElementsByClassName("titoloL2");
    for (let i = 0; i < lv2.length; i++) {
        lv2[i].style.color = "blue";
        lv2[i].style.backgroundColor = "yellow";
        lv2[i].style.fontSize = "40px";
        lv2[i].innerHTML = lv2[i].innerHTML.toUpperCase();
    }

    p_red = [document.getElementById("par1"), document.getElementById("par4")];
    for (let i = 0; i < p_red.length; i++)
        p_red[i].style.color = "red";

    p_green = [document.getElementById("par2"), document.getElementById("par5"), document.getElementById("par8")];
    for (let i = 0; i < p_green.length; i++)
        p_green[i].style.backgroundColor = "lightgreen";

    p3 = document.getElementById("par3");
    p3.innerHTML = p3.innerHTML.toUpperCase();
    p3.style.backgroundColor = "lightblue";

    p6 = document.getElementById("par6");
    p6.innerHTML = p6.innerHTML.toUpperCase();

    p7 = document.getElementById("par7");
    p7.style.fontStyle = "italic";
}