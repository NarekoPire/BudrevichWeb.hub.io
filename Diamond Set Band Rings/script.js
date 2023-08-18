let open1=document.querySelector(".a4 ");
let openlist1=document.querySelector(".threelist");
let one=0;

open1.addEventListener("click",function (){
   if(one===0){
       openlist1.style.display="flex";
       one++;
   }else 
     {
       openlist1.style.display="none";
       one === 0
     }
});




let openlist2=document.querySelector(".fourlist2");
let a51=document.querySelector(".a51");
 
let open2=document.querySelector(".a8");
let two=0;




open2.addEventListener("click",function (){
    if(two===0){
        openlist2.style.display="flex";                
        openlist2.style.minHeight="100px";              
        a51.style.trasform="rotate(10deg)";             
        two++;
    }else 
      {
        openlist2.style.display="none";
           two===0
      }
 });
 
 

let openthrerow=document.querySelector(".a13");
let fourlist=document.querySelector(".fourlist");
let three=0


openthrerow.addEventListener("click",function (){
    if(three===0){
        fourlist.style.display="flex";
        three++;
    }else 
      {
        fourlist.style.display="none";
        three === 0;
      }
 });
 


 let box1 = document.querySelector(".box1");
 let bacvoxp1 = document.querySelector(".bacvoxp1");
 let n = 0;
 box1.addEventListener("click", function () {
   if (n === 0) {
     bacvoxp1.style.display = "block";
     n++;
   } else {
     bacvoxp1.style.display = "none";
     n === 0;
   }
 })
 
 let box2 = document.querySelector(".box2");
 let bacvoxp2 = document.querySelector(".bacvoxp2");
 let m = 0
 box2.addEventListener("click", function () {
   if (m === 0) {
     bacvoxp2.style.display = "block";
     m++;
   } else {
     bacvoxp2.style.display = "none";
     m === 0;
   }
 })
 
 
 let box3 = document.querySelector(".box3");
 let bacvoxp3 = document.querySelector(".bacvoxp3");
 let k = 0
 box3.addEventListener("click", function () {
   if (k === 0) {
     bacvoxp3.style.display = "block";
     k++;
   } else {
     bacvoxp3.style.display = "none";
     k === 0;
   }
 })
 
 
 let box4 = document.querySelector(".box4");
 let bacvoxp4 = document.querySelector(".bacvoxp4");
 let l = 0
 box4.addEventListener("click", function () {
   if (l === 0) {
     bacvoxp4.style.display = "block";
     l++;
   } else {
     bacvoxp4.style.display = "none";
     l === 0;
   }
 })
 