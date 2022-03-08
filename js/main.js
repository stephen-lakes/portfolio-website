"use strict";

function navToggler(){
    const navClass = document.querySelector(".nav");
    if (navClass.className === "nav") {
        navClass.className = navClass.className + " responsive"
    }else {
        navClass.className = "nav"
    }
};
