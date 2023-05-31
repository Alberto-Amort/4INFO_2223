function modifica_stile(){
   let L1 = document.getElementsByClassName("titoloL1");
   let L2 = document.getElementsByClassName("titoloL2");
   for (let i = 0; i < L1.length; i++) {
     let el = L1[i];
     el.style.color = "red";
   }
   for (let i = 0; i < L2.length; i++) {
    let el = L2[i];
    el.style.color = "blue";
    el.style.backgroundColor= "yellow";
    el.style.fontSize='40px';
    el.textContent=el.textContent.toUpperCase();
  }
  let p1=document.getElementById("par1");
  let p2=document.getElementById("par2");
  let p3=document.getElementById("par3");
  let p4=document.getElementById("par4");
  let p5=document.getElementById("par5");
  let p6=document.getElementById("par6");
  let p7=document.getElementById("par7");
  let p8=document.getElementById("par8");
  let p9=document.getElementById("par9");   
  par1.style.color="red";
  par4.style.color="red";
  par2.style.backgroundColor="#90EE90";
  par5.style.backgroundColor="#90EE90";
  par8.style.backgroundColor="#90EE90";
  par3.textContent=par3.textContent.toUpperCase();  
  par3.style.backgroundColor="#ADD8E6";
  par6.textContent=par6.textContent.toUpperCase(); 
  par7.style.fontStyle='italic'; 
}