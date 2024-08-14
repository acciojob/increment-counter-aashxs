//your JS code here. If required.
let btn=document.querySelector("#btn");
let inc=document.querySelector("#inc");
let i=1;
btn.addEventListener("click",()=>{
    
    inc.innerHTML=i;
   alert(i);
    i++;
    

})