//your JS code here. If required.
let btn=document.querySelector("#incrementBtn");
let inc=document.querySelector("#counter");
let i=0;
btn.addEventListener("click",()=>{
    
    
    alert(i);
    i++;
      inc.innerHTML=i;

})