let open1=document.querySelector(".a4");
let openlist1=document.querySelector(".threelist");
let one=0;

open1.addEventListener("click",function (){
  
   if(one===0){
       openlist1.style.display="flex";
       one++
   }else 
     {
       openlist1.style.display="none";
       one = 0
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
        two++
    }else 
      {
        openlist2.style.display="none";
           two=0
      }
 });
 
 
 

let openthrerow=document.querySelector(".a13");
let fourlist=document.querySelector(".fourlist");
let three=0;


openthrerow.addEventListener("click",function (){
    if(three===0){
        fourlist.style.display="flex";
        three++;
    }else 
      {
        fourlist.style.display="none";
        three = 0;
      }
 });
 





 let faqbox1 = document.querySelector(".budrevich_faq_box")
let faqbox2 = document.querySelector(".budrevich_faq_box1")
let faqbox3 = document.querySelector(".budrevich_faq_box2")
let faqbox4 = document.querySelector(".budrevich_faq_box3")
let faqbox5 = document.querySelector(".budrevich_faq_box4")
let faqbox6 = document.querySelector(".budrevich_faq_box5")
let faqbox7 = document.querySelector(".budrevich_faq_box6")
let faqbox8 = document.querySelector(".budrevich_faq_box7")
let faqbox9 = document.querySelector(".budrevich_faq_box8")
let faqbox10 = document.querySelector(".budrevich_faq_box9")

let faqboxinfo1 = document.querySelector(".faq_box_info")
let faqboxinfo2 = document.querySelector(".faq_box_info1")
let faqboxinfo3 = document.querySelector(".faq_box_info2")
let faqboxinfo4 = document.querySelector(".faq_box_info3")
let faqboxinfo5 = document.querySelector(".faq_box_info4")
let faqboxinfo6 = document.querySelector(".faq_box_info5")
let faqboxinfo7 = document.querySelector(".faq_box_info6")
let faqboxinfo8 = document.querySelector(".faq_box_info7")
let faqboxinfo9 = document.querySelector(".faq_box_info8")
let faqboxinfo10 = document.querySelector(".faq_box_info9")

let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")
let img4 = document.querySelector(".img4")
let img5 = document.querySelector(".img5")
let img6 = document.querySelector(".img6")
let img7 = document.querySelector(".img7")
let img8 = document.querySelector(".img8")
let img9 = document.querySelector(".img9")
let img10 = document.querySelector(".img10")

faqbox1.addEventListener("click", function () {
  if (faqboxinfo1.style.display = "block" === faqboxinfo1.style.display) {
    faqboxinfo1.style.display = "none"
    img1.src = 'img/plus.png';
  } else {
    faqboxinfo1.style.display = "block"
    faqboxinfo2.style.display = "none"
    faqboxinfo3.style.display = "none"
    faqboxinfo4.style.display = "none"
    faqboxinfo5.style.display = "none"
    faqboxinfo6.style.display = "none"
    faqboxinfo7.style.display = "none"
    faqboxinfo8.style.display = "none"
    faqboxinfo9.style.display = "none"
    faqboxinfo10.style.display = "none"
    img1.src = 'img/minus.png';
    img2.src = 'img/plus.png';
    img3.src = 'img/plus.png';
    img4.src = 'img/plus.png';
    img5.src = 'img/plus.png';
    img6.src = 'img/plus.png';
    img7.src = 'img/plus.png';
    img8.src = 'img/plus.png';
    img9.src = 'img/plus.png';
    img10.src = 'img/plus.png';
  }

})
faqbox2.addEventListener("click", function () {
  if (faqboxinfo2.style.display = "block" === faqboxinfo2.style.display) {
    faqboxinfo2.style.display = "none"
    img2.src = 'img/plus.png';
  } else {
    faqboxinfo1.style.display = "none"
    faqboxinfo2.style.display = "block"
    faqboxinfo3.style.display = "none"
    faqboxinfo4.style.display = "none"
    faqboxinfo5.style.display = "none"
    faqboxinfo6.style.display = "none"
    faqboxinfo7.style.display = "none"
    faqboxinfo8.style.display = "none"
    faqboxinfo9.style.display = "none"
    faqboxinfo10.style.display = "none"
    img2.src = 'img/minus.png';
    img3.src = 'img/plus.png';
    img4.src = 'img/plus.png';
    img5.src = 'img/plus.png';
    img6.src = 'img/plus.png';
    img7.src = 'img/plus.png';
    img8.src = 'img/plus.png';
    img9.src = 'img/plus.png';
    img10.src = 'img/plus.png';
    img1.src = 'img/plus.png';
  }

})
faqbox3.addEventListener("click", function () {
  if (faqboxinfo3.style.display = "block" === faqboxinfo3.style.display) {
    faqboxinfo3.style.display = "none"
    img3.src = 'img/plus.png';
  } else {
  
    faqboxinfo1.style.display = "none"
    faqboxinfo2.style.display = "none"
    faqboxinfo4.style.display = "none"
    faqboxinfo3.style.display = "block"
    faqboxinfo5.style.display = "none"
    faqboxinfo6.style.display = "none"
    faqboxinfo7.style.display = "none"
    faqboxinfo8.style.display = "none"
    faqboxinfo9.style.display = "none"
    faqboxinfo10.style.display = "none"
    img2.src = 'img/plus.png';
    img3.src = 'img/minus.png';
    img4.src = 'img/plus.png';
    img5.src = 'img/plus.png';
    img6.src = 'img/plus.png';
    img7.src = 'img/plus.png';
    img8.src = 'img/plus.png';
    img9.src = 'img/plus.png';
    img10.src = 'img/plus.png';
    img1.src = 'img/plus.png';
  }

})
faqbox4.addEventListener("click", function () {
  if (faqboxinfo4.style.display = "block" === faqboxinfo4.style.display) {
    faqboxinfo4.style.display = "none"
    img4.src = 'img/plus.png';
  } else {
    faqboxinfo4.style.display = "block"
    faqboxinfo1.style.display = "none"
    faqboxinfo2.style.display = "none"
    faqboxinfo3.style.display = "none"
    img1.src = 'img/plus.png';
    img2.src = 'img/plus.png';
    img3.src = 'img/plus.png';
    img4.src = 'img/minus.png';

    faqboxinfo1.style.display = "none"
    faqboxinfo2.style.display = "none"
    faqboxinfo4.style.display = "block"
    faqboxinfo5.style.display = "none"
    faqboxinfo3.style.display = "none"
    faqboxinfo6.style.display = "none"
    faqboxinfo7.style.display = "none"
    faqboxinfo8.style.display = "none"
    faqboxinfo9.style.display = "none"
    faqboxinfo10.style.display = "none"
    img2.src = 'img/plus.png';
    img3.src = 'img/plus.png';
    img4.src = 'img/minus.png';
    img5.src = 'img/plus.png';
    img6.src = 'img/plus.png';
    img7.src = 'img/plus.png';
    img8.src = 'img/plus.png';
    img9.src = 'img/plus.png';
    img10.src = 'img/plus.png';
    img1.src = 'img/plus.png';
  }

})

faqbox5.addEventListener("click", function () {
  if (faqboxinfo5.style.display = "block" === faqboxinfo5.style.display) {
    faqboxinfo5.style.display = "none"
    img5.src = 'img/plus.png';
  } else {
    faqboxinfo1.style.display = "none"
    faqboxinfo2.style.display = "none"
    faqboxinfo4.style.display = "none"
    faqboxinfo5.style.display = "block"
    faqboxinfo3.style.display = "none"
    faqboxinfo6.style.display = "none"
    faqboxinfo7.style.display = "none"
    faqboxinfo8.style.display = "none"
    faqboxinfo9.style.display = "none"
    faqboxinfo10.style.display = "none"
    img2.src = 'img/plus.png';
    img3.src = 'img/plus.png';
    img4.src = 'img/plus.png';
    img5.src = 'img/minus.png';
    img6.src = 'img/plus.png';
    img7.src = 'img/plus.png';
    img8.src = 'img/plus.png';
    img9.src = 'img/plus.png';
    img10.src = 'img/plus.png';
    img1.src = 'img/plus.png';
  }

})

faqbox6.addEventListener("click", function () {
  if (faqboxinfo6.style.display = "block" === faqboxinfo6.style.display) {
    faqboxinfo6.style.display = "none"
    img6.src = 'img/plus.png';
  } else {
  
    faqboxinfo1.style.display = "none"
    faqboxinfo2.style.display = "none"
    faqboxinfo3.style.display = "none"
    faqboxinfo4.style.display = "none"
    faqboxinfo5.style.display = "none"
    faqboxinfo6.style.display = "block"
    faqboxinfo7.style.display = "none"
    faqboxinfo8.style.display = "none"
    faqboxinfo9.style.display = "none"
    faqboxinfo10.style.display = "none"
    img2.src = 'img/plus.png';
    img3.src = 'img/plus.png';
    img4.src = 'img/plus.png';
    img5.src = 'img/plus.png';
    img6.src = 'img/minus.png';
    img7.src = 'img/plus.png';
    img8.src = 'img/plus.png';
    img9.src = 'img/plus.png';
    img10.src = 'img/plus.png';
    img1.src = 'img/plus.png';
  }

})

faqbox7.addEventListener("click", function () {
  if (faqboxinfo7.style.display = "block" === faqboxinfo7.style.display) {
    faqboxinfo7.style.display = "none"
    img7.src = 'img/plus.png';
  } else {
  
    faqboxinfo1.style.display = "none"
    faqboxinfo2.style.display = "none"
    faqboxinfo3.style.display = "none"
    faqboxinfo4.style.display = "none"
    faqboxinfo5.style.display = "none"
    faqboxinfo6.style.display = "none"
    faqboxinfo7.style.display = "block"
    faqboxinfo8.style.display = "none"
    faqboxinfo9.style.display = "none"
    faqboxinfo10.style.display = "none"
    img2.src = 'img/plus.png';
    img3.src = 'img/plus.png';
    img4.src = 'img/plus.png';
    img5.src = 'img/plus.png';
    img6.src = 'img/plus.png';
    img7.src = 'img/minus.png';
    img8.src = 'img/plus.png';
    img9.src = 'img/plus.png';
    img10.src = 'img/plus.png';
    img1.src = 'img/plus.png';
  }

})

faqbox8.addEventListener("click", function () {
  if (faqboxinfo8.style.display = "block" === faqboxinfo8.style.display) {
    faqboxinfo8.style.display = "none"
    img8.src = 'img/plus.png';
  } else {
  
    faqboxinfo1.style.display = "none"
    faqboxinfo2.style.display = "none"
    faqboxinfo3.style.display = "none"
    faqboxinfo4.style.display = "none"
    faqboxinfo5.style.display = "none"
    faqboxinfo6.style.display = "none"
    faqboxinfo7.style.display = "none"
    faqboxinfo8.style.display = "block"
    faqboxinfo9.style.display = "none"
    faqboxinfo10.style.display = "none"
    img2.src = 'img/plus.png';
    img3.src = 'img/plus.png';
    img4.src = 'img/plus.png';
    img5.src = 'img/plus.png';
    img6.src = 'img/plus.png';
    img7.src = 'img/plus.png';
    img8.src = 'img/minus.png';
    img9.src = 'img/plus.png';
    img10.src = 'img/plus.png';
    img1.src = 'img/plus.png';
  }

})

faqbox9.addEventListener("click", function () {
  if (faqboxinfo9.style.display = "block" === faqboxinfo9.style.display) {
    faqboxinfo9.style.display = "none"
    img9.src = 'img/plus.png';
  } else {
  
    faqboxinfo1.style.display = "none"
    faqboxinfo2.style.display = "none"
    faqboxinfo3.style.display = "none"
    faqboxinfo4.style.display = "none"
    faqboxinfo5.style.display = "none"
    faqboxinfo6.style.display = "none"
    faqboxinfo7.style.display = "none"
    faqboxinfo8.style.display = "none"
    faqboxinfo9.style.display = "block"
    faqboxinfo10.style.display = "none"
    img2.src = 'img/plus.png';
    img3.src = 'img/plus.png';
    img4.src = 'img/plus.png';
    img5.src = 'img/plus.png';
    img6.src = 'img/plus.png';
    img7.src = 'img/plus.png';
    img8.src = 'img/plus.png';
    img9.src = 'img/minus.png';
    img10.src = 'img/plus.png';
    img1.src = 'img/plus.png';
  }

})

faqbox10.addEventListener("click", function () {
  if (faqboxinfo10.style.display = "block" === faqboxinfo10.style.display) {
    faqboxinfo10.style.display = "none"
    img10.src = 'img/plus.png';
  } else {
  
    faqboxinfo1.style.display = "none"
    faqboxinfo2.style.display = "none"
    faqboxinfo3.style.display = "none"
    faqboxinfo4.style.display = "none"
    faqboxinfo5.style.display = "none"
    faqboxinfo6.style.display = "none"
    faqboxinfo7.style.display = "none"
    faqboxinfo8.style.display = "none"
    faqboxinfo9.style.display = "none"
    faqboxinfo10.style.display = "block"
    img2.src = 'img/plus.png';
    img3.src = 'img/plus.png';
    img4.src = 'img/plus.png';
    img5.src = 'img/plus.png';
    img6.src = 'img/plus.png';
    img7.src = 'img/plus.png';
    img8.src = 'img/plus.png';
    img9.src = 'img/plus.png';
    img10.src = 'img/minus.png';
    img1.src = 'img/plus.png';
  }

})
