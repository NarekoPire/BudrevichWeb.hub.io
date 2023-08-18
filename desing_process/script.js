let open1 = document.querySelector(".a4 ");
let openlist1 = document.querySelector(".threelist");
let one = 0;

open1.addEventListener("click", function () {
    if (one === 0) {
        openlist1.style.display = "flex";
        one++;
    } else {
        openlist1.style.display = "none";
        one = 0
    }
});




let openlist2 = document.querySelector(".fourlist2");
let a51 = document.querySelector(".a51");

let open2 = document.querySelector(".a8");
let two = 0;




open2.addEventListener("click", function () {
    if (two === 0) {
        openlist2.style.display = "flex";
        openlist2.style.minHeight = "100px";
        a51.style.trasform = "rotate(10deg)";
        two++;
    } else {
        openlist2.style.display = "none";
        two = 0
    }
});



let openthrerow = document.querySelector(".a13");
let fourlist = document.querySelector(".fourlist");
let three = 0


openthrerow.addEventListener("click", function () {
    if (three === 0) {
        fourlist.style.display = "flex";
        three++;
    } else {
        fourlist.style.display = "none";
        three = 0;
    }
});