

// responn



var st = false;
const navSlide = () => {
    const burger = document.querySelector(".menu-btn");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-berger");
        st = true;
    });

    const body = document.querySelector(".logo");

    body.addEventListener("click", () => {
        console.log("jalan");
        console.log(st);
        if (st == true) {
            navLists.classList.remove("nav-active");
            st = false;
        }
    });
};

navSlide();

// quest

window.onbeforeunload = () => {
    for (const form of document.getElementByTagName("form")){
        form.reset();
    }
}

// sticky

window.onscroll = function () {
    menu();
}

function menu(){
    if (document.documentElement.scrollTop > 25) {
        document.getElementById("header").classList.add("shadow");
    } else {
        document.getElementById("header").classList.remove("shadow");
    }
}