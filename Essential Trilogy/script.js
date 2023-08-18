let offset = 0
const sliderline = document.querySelector(".slide_container_sliderline")
const rec1 = document.querySelector(".rectangle1")
const rec2 = document.querySelector(".rectangle2")
const rec3 = document.querySelector(".rectangle3")
document.querySelector(".but1").addEventListener("click", function () {
    offset = offset - 537
    if (offset < 0) {
        offset = 1074
    }
    sliderline.style.left = -offset + "px"
})
document.querySelector(".but2").addEventListener("click", function () {
    offset = offset + 537
    if (offset > 1074) {
        offset = 0
    }
    sliderline.style.left = -offset + "px"
})

let clos = document.querySelector(".clos");
let description_info = document.querySelector(".description_info");
let product_care_info = document.querySelector(".product_care_info");
let size_chart_info = document.querySelector(".size_chart_info");
let note_about_pricing_info = document.querySelector(".note_about_pricing_info");
let description = document.querySelector(".description").addEventListener("click", function () {
    clos.style.display = "none"
    description_info.style.display = "block"
    product_care_info.style.display = "none"
    size_chart_info.style.display = "none"
    note_about_pricing_info.style.display = "none"
})
let product_care = document.querySelector(".product_care").addEventListener("click", function () {
    clos.style.display = "none"
    product_care_info.style.display = "block"
    description_info.style.display = "none"
    size_chart_info.style.display = "none"
    note_about_pricing_info.style.display = "none"
})
let size_chart = document.querySelector(".size_chart").addEventListener("click", function () {
    clos.style.display = "none"
    size_chart_info.style.display = "block"
    product_care_info.style.display = "none"
    description_info.style.display = "none"
    note_about_pricing_info.style.display = "none"
})
let note_about_pricing = document.querySelector(".note_about_pricing").addEventListener("click", function () {
    clos.style.display = "none"
    note_about_pricing_info.style.display = "block"
    size_chart_info.style.display = "none"
    product_care_info.style.display = "none"
    description_info.style.display = "none"
})
let plus = document.querySelector(".plus").addEventListener("click", function () {
    clos.style.display = "flex"
    description_info.style.display = "none"
})
let plus1 = document.querySelector(".plus1").addEventListener("click", function () {
    clos.style.display = "flex"
    product_care_info.style.display = "none"
})
let plus2 = document.querySelector(".plus2").addEventListener("click", function () {
    clos.style.display = "flex"
    size_chart_info.style.display = "none"
})
let plus3 = document.querySelector(".plus3").addEventListener("click", function () {
    clos.style.display = "flex"
    note_about_pricing_info.style.display = "none"
})