console.log("me");
let cubeElem = document.getElementById("cube");
cubeElem.addEventListener("mouseenter", function () {
    cubeElem.setAttribute("scale", "3 3 3");
})