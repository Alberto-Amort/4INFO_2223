function modifica_stile() {
    let el1 = document.getElementsByClassName("titoloL1");
    el1[0].style.color = "red";


    let el2 = document.getElementsByClassName("titoloL2");
    for (let i = 0; i < el2.length; i++) {
        let el = el2[i];
        el.style.color = "blue";
        el.style.backgroundColor = "yellow";
        el.style.fontSize = '40px';
        el.textContent = el.textContent.toUpperCase();
    }

    let obj_par1 = document.getElementById("par1");
    let obj_par2 = document.getElementById("par2");
    let obj_par3 = document.getElementById("par3");
    let obj_par4 = document.getElementById("par4");
    let obj_par5 = document.getElementById("par5");
    let obj_par6 = document.getElementById("par6");
    let obj_par7 = document.getElementById("par7");
    let obj_par8 = document.getElementById("par8");

    obj_par1.style.color = "red";
    obj_par4.style.color = "red";

    obj_par2.style.backgroundColor = "lime";
    obj_par5.style.backgroundColor = "lime";
    obj_par8.style.backgroundColor = "lime";

    obj_par3.style.backgroundColor = "cornflowerblue";
    obj_par3.textContent = obj_par3.textContent.toUpperCase();
    obj_par6.textContent = obj_par3.textContent.toUpperCase();

    obj_par7.style.fontStyle = 'italic';




}