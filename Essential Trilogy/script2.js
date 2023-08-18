let faqbox1 = document.querySelector(".budrevich_faq_box")
let faqbox2 = document.querySelector(".budrevich_faq_box1")
let faqbox3 = document.querySelector(".budrevich_faq_box2")
let faqbox4 = document.querySelector(".budrevich_faq_box3")
let faqboxinfo1 = document.querySelector(".faq_box_info")
let faqboxinfo2 = document.querySelector(".faq_box_info1")
let faqboxinfo3 = document.querySelector(".faq_box_info2")
let faqboxinfo4 = document.querySelector(".faq_box_info3")
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")
let img4 = document.querySelector(".img4")
faqbox1.addEventListener("click", function () {
  if (faqboxinfo1.style.display = "block" === faqboxinfo1.style.display) {
    faqboxinfo1.style.display = "none"
    img1.src = 'img/plus.png';
  } else {
    faqboxinfo1.style.display = "block"
    faqboxinfo2.style.display = "none"
    faqboxinfo3.style.display = "none"
    faqboxinfo4.style.display = "none"
    img2.src = 'img/plus.png';
    img3.src = 'img/plus.png';
    img4.src = 'img/plus.png';
    img1.src = 'img/minus.png';
  }

})
faqbox2.addEventListener("click", function () {
  if (faqboxinfo2.style.display = "block" === faqboxinfo2.style.display) {
    faqboxinfo2.style.display = "none"
    img2.src = 'img/plus.png';
  } else {
    faqboxinfo2.style.display = "block"
    faqboxinfo1.style.display = "none"
    faqboxinfo3.style.display = "none"
    faqboxinfo4.style.display = "none"
    img1.src = 'img/plus.png';
    img3.src = 'img/plus.png';
    img4.src = 'img/plus.png';
    img2.src = 'img/minus.png';
  }

})
faqbox3.addEventListener("click", function () {
  if (faqboxinfo3.style.display = "block" === faqboxinfo3.style.display) {
    faqboxinfo3.style.display = "none"
    img3.src = 'img/plus.png';
  } else {
    faqboxinfo3.style.display = "block"
    faqboxinfo2.style.display = "none"
    faqboxinfo1.style.display = "none"
    faqboxinfo4.style.display = "none"
    img1.src = 'img/plus.png';
    img2.src = 'img/plus.png';
    img4.src = 'img/plus.png';
    img3.src = 'img/minus.png';
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
  }

})

