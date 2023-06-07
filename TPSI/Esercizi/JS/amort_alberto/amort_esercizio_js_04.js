function modifica_stile()
{
    let title_1lev=document.querySelector("h1");
    let title_2lev=document.getElementsByClassName("titoloL2");

    title_1lev.style.color="red";

    for(var cont=0; cont<title_2lev.length; cont++)
    {
        title_2lev[cont].style.color="blue";
        title_2lev[cont].style.backgroundColor="yellow";
        title_2lev[cont].style.fontSize="40px";
        title_2lev[cont].textContent=title_2lev[cont].textContent.toUpperCase();
    }
    
    
    let para1 = document.getElementById("par1");
    let para2 = document.getElementById("par2");
    let para3 = document.getElementById("par3");
    let para4 = document.getElementById("par4");
    let para5 = document.getElementById("par5");
    let para6 = document.getElementById("par6");
    let para7 = document.getElementById("par7");
    let para8 = document.getElementById("par8"); 

    para1.style.color="red";
    para4.style.color="red";

    para2.style.backgroundColor="lightgreen";
    para5.style.backgroundColor="lightgreen";
    para8.style.backgroundColor="lightgreen";

    para3.style.backgroundColor="lightblue";
    para3.textContent=para3.textContent.toUpperCase();

    para6.textContent=para6.textContent.toUpperCase();

    para7.style.fontStyle="italic";


    





}