const section1 = document.querySelector(".section1")
const section2 = document.querySelector(".section2")
const section3 = document.querySelector(".section3")
const btn_all = document.querySelector(".collapse-all")
const body = document.querySelector("body")
const bg_button = document.querySelector(".bg-button")
const section_top = document.querySelector(".section-top")

const btn_01 = document.querySelector(".btn01")
const btn_02 = document.querySelector(".btn02")
const btn_03 = document.querySelector(".btn03")
const btn_04 = document.querySelector(".btn04")
const btn_05 = document.querySelector(".btn05")
const btn_06 = document.querySelector(".btn06")
const btn_07 = document.querySelector(".btn07")
const btn_08 = document.querySelector(".btn08")

const contentUp1 = document.querySelector(".content-up1")
const contentUp2 = document.querySelector(".content-up2")
const contentUp3 = document.querySelector(".content-up3")
const contentUp4 = document.querySelector(".content-up4")

const imgwrap4 = document.querySelector(".img-wrap4")
const imgwrap3 = document.querySelector(".img-wrap3")
const imgwrap2 = document.querySelector(".img-wrap2")
const imgwrap1 = document.querySelector(".img-wrap1")


const bgcolors = ["black", "red", "green", "grey", "lightgrey", "blue", "magenta"];

// Collapse All code
btn_all.addEventListener("click", funct1);

function funct1(e) {
    section2.style.transition = "all ease 5s";
    if (section2.style.display == 'block') {
        section2.style.transition = "ease 5s";
        section2.style.display = 'none';
        btn_all.style.backgroundColor = ""


    } else {
        section2.style.transition = "ease 5s";
        section2.style.display = 'block';
        btn_all.style.color = "white"
        btn_all.style.backgroundColor = "blue"
    }
    // const random = Math.floor(Math.random() * bgcolors.length);
    // console.log(random, bgcolors[random]);
    // section2.style.backgroundColor ="bgcolors[random]";
}


// change the color of the bg of the body
// for loop not working !!
// @AbdelmounimSIFELHAK You want your button to
// switch the background between two states.Rather than setting a new EventListener every time that state changes, this example defines a single EventHandler that gets attached to the button
// once and handles the click in either state.The event handler chooses its behaviour based on the variable that is kept and updated outside the
// function every time it is called.If this solution worked
// for you, please mark my answer as accepted.–
//Note that if you attach a second listener with addEventListener like you did originally, they will both be called unless you unregister the other one with removeEventListener.

let toggleState = false

function toggleBackground() {
    toggleState = !toggleState
    if (toggleState) {
        body.style.backgroundColor = "lightgrey"
        section_top.style.backgroundColor = "white"
    } else {
        body.style.backgroundColor = "white"
        section_top.style.backgroundColor = ""
    }
}

bg_button.addEventListener("click", toggleBackground);
// content-up DOM manipulation

btn_01.addEventListener("click", funct4);

function funct4(e) {

    if (contentUp1.style.display == 'block') {
        contentUp1.style.display = "none"
        contentUp1.style.transition = "ease 5s";
    } else {
        contentUp1.style.display = 'block'
        contentUp1.style.transition = "ease 5s";
    }
}

btn_03.addEventListener("click", funct5);

function funct5(e) {

    if (contentUp2.style.display == 'block') {
        contentUp2.style.display = "none"
    } else {
        contentUp2.style.display = 'block'
    }
}

btn_05.addEventListener("click", funct6);

function funct6(e) {

    if (contentUp3.style.display == 'block') {
        contentUp3.style.display = "none"
    } else {
        contentUp3.style.display = 'block'
    }
}

btn_07.addEventListener("click", funct7);

function funct7(e) {

    if (contentUp4.style.display == 'block') {
        contentUp4.style.display = "none"
    } else {
        contentUp4.style.display = 'block'
    }
}

// Image wrappers


btn_02.addEventListener("click", functt);

function functt(e) {
    const child2 = imgwrap1.children[2];
    if (child2.style.transform == '') {
        child2.style.transform = 'scale(1.2)'
        child2.style.transition = "all ease 4s"
        child2.style.position = "relative"
        child2.style.bottom = "500px"

    } else {
        child2.style.transform = ''
        child2.style.transition = "all ease 2s"
        child2.style.position = "relative"
        child2.style.bottom = ""
    }

    const child0 = imgwrap1.children[0];
    if (child0.style.transform == '') {
        child0.style.transform = 'scale(1.2)'
        child0.style.opacity = "0.5"
        child0.style.borderRadius = "120px"
        child0.style.position = "relative"
        child0.style.top = "250px"
        child0.style.transition = "all ease 2s"
        child0.style.animation = "shake 3s 2"

    } else {
        child0.style.transform = ''
        child0.style.opacity = ""
        child0.style.borderRadius = ""
        child0.style.top = ""
        child0.style.transition = "all ease 2s"
    }

    const child1 = imgwrap1.children[1];
    if (child1.style.transform == '') {
        child1.style.transform = 'scale(1.2)'
        child1.style.opacity = "0.7"
        child1.style.borderRadius = "600px"
        child1.style.filter = ""
        child1.style.position = "relative"
        child1.style.top = "250px"
        child1.style.transition = "all ease 2s"

    } else {
        child1.style.transform = ""
        child1.style.filter = "invert(100%)"
        child1.style.opacity = "0.8"
        child1.style.borderRadius = "40px"
        child1.style.transition = "all ease 2s"
        child1.style.position = "relative"
        child1.style.top = ""
    }
}













































// document.querySelectorAll(".btnXX").forEach((btn) => {
//     btn.addEventListener("click", funct5);

//     function funct5(e) {
//         document.querySelectorAll(".content-up").forEach((contentUp) => {

//             if (contentUp1.style.display == 'block') {
//                 contentUp1.style.display = "none"
//             } else {
//                 contentUp1.style.display = 'block'
//             }
//             if (contentUp2.style.display == 'block') {
//                 contentUp2.style.display = "none"
//             } else {
//                 contentUp2.style.display = 'block'
//             }
//         });
//     }
// });