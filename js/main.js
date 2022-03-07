"use strict";

function myFunction(){
    const x = document.querySelector(".nav");
    if (x.className === "nav") {
        x.className = x.className + " responsive"
    }else {
        x.className = "nav"
    }
};
