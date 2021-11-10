const section1 = document.querySelector(".section1")
const section2 = document.querySelector(".section2")
const section3 = document.querySelector(".section3")
const btn_all = document.querySelector(".collapse-all")


btn_all.addEventListener("click", funct1);
function funct1(e) {
    section2.style.display="none";
    section2.style.transition="all ease 5s";
}

