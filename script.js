console.log("me");

window.addEventListener("wheel", event=>{
    let myCamera = document.getElementById("camera");
    const delta=Math.sign(event.wheelDelta);
    const currentZoom = Number(myCamera.getAttribute("zoom"));
    let newZoom = delta * 0.05 + currentZoom;
   
    const closestZoom = 1; 
    const farthestZoom =0.01;

    if (newZoom > closestZoom){
        newZoom= closestZoom
    }
    if (newZoom < farthestZoom){
        newZoom = farthestZoom
    }

    myCamera.setAttribute("zoom", newZoom);
    console.log({newZoom})
})