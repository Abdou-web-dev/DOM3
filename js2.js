const btnItems = document.querySelector(".btn-items")
const btnLion = document.querySelector(".btn-lion")
const img1 = document.querySelector(".img-1")
const wrapItems = document.querySelector(".items-wrap")




btnLion.addEventListener("click", funct1);

function funct1(e) {
    if (img1.style.display == "block") {
        img1.style.display = "none"
        wrapItems.style.animation = "shake 3s"
    } else {
        img1.style.display = "block"
        wrapItems.style.animation = "shake 2s"

    }
}
// btnItems
// I changed it to tue
let toggleStatee = true

function toggleVisibily() {
    toggleStatee = !toggleStatee
    if (toggleStatee) {
        setTimeout(() => {
            btnItems.innerHTML = "<span>click to hide them again !</span>"
            btnItems.style.transition="all ease 2s"
        }, 2500);
        setTimeout(() => {
            wrapItems.children[0].style.display = "inline-block"
            // wrapItems.children[0].style.transform = "scale(1.2)"
            wrapItems.children[0].style.animation = "shake 2s 1"
        }, 1000);
        setTimeout(() => {
            wrapItems.children[1].style.display = "inline-block"
            // wrapItems.children[1].style.transform = "scale(1.35)"
            wrapItems.children[1].style.animation = "shake 2s 2"
        }, 2000);
        setTimeout(() => {
            wrapItems.children[2].style.display = "inline-block"
            // wrapItems.children[2].style.transform = "scale(1.45)"
            wrapItems.children[2].style.animation = "shake 2s 3"
            // wrapItems.children[0].style.transition = "all ease 6s"
        }, 3000);
        setTimeout(() => {
            wrapItems.children[3].style.display = "inline-block"
            // wrapItems.children[3].style.transform = "scale(1.6)"
            wrapItems.children[3].style.animation = "shake 2s 4"
        }, 4000);
        setTimeout(() => {
            wrapItems.children[4].style.display = "inline-block"
            // wrapItems.children[4].style.transform = "scale(1.7)"
            wrapItems.children[4].style.animation = "shake 2s 5"
        }, 5000);
        setTimeout(() => {
            wrapItems.children[5].style.display = "inline-block"
            // wrapItems.children[5].style.transform = "scale(1.85)"
            wrapItems.children[5].style.animation = "shake 2s 6" // 6 times

        }, 6000);
        setTimeout(() => {
            wrapItems.children[6].style.display = "inline-block"
            wrapItems.children[6].style.transform = "scale(2)"
            wrapItems.children[6].style.animation = "shake 2s 7"
        }, 7000);

    } else {
        setTimeout(() => {
            btnItems.innerHTML = "<span>click to show the items !</span>"
            btnItems.style.transition="all ease 2s"
        }, 2500);
        setTimeout(() => {
            wrapItems.children[0].style.display = "none"
            // wrapItems.children[0].style.transform = ""
        }, 1000);
        setTimeout(() => {
            wrapItems.children[1].style.display = "none"
            // wrapItems.children[1].style.transform = ""
        }, 2000);
        setTimeout(() => {
            wrapItems.children[2].style.display = "none"
            // wrapItems.children[2].style.transform = ""
        }, 3000);
        setTimeout(() => {
            wrapItems.children[3].style.display = "none"
            // wrapItems.children[3].style.transform = ""
        }, 4000);
        setTimeout(() => {
            wrapItems.children[4].style.display = "none"
            // wrapItems.children[4].style.transform = ""
        }, 5000);
        setTimeout(() => {
            wrapItems.children[5].style.display = "none"
            // wrapItems.children[5].style.transform = ""

        }, 6000);
        setTimeout(() => {
            wrapItems.children[6].style.display = "none"
            // wrapItems.children[6].style.transform = ""
        }, 7000);
    }
}
btnItems.addEventListener("click", toggleVisibily);