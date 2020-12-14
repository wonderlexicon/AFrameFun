console.log("me");

AFRAME.registerComponent('query-selector-example', {
    init: function () {
      this.entities = document.querySelectorAll('.box');
    },
    
    tick: function () {
      // Don't call query selector in here, query beforehand.
      for (let i = 0; i < this.entities.length; i++) {
        // Do something with entities.
      }
    }
  });

  entityEl.setAttribute('geometry', {
    primitive: 'box',
    height: 3,
    width: 1
  });


  entityEl.setAttribute('dynamic-body', {
    shape: 'box',
    mass: 1.5,
    linearDamping: 0.005
  });

window.addEventListener("wheel", event=>{
    let myCamera = document.getElementById("camera");
    const delta=Math.sign(event.wheelDelta);
    const currentZoom = Number(myCamera.getAttribute("zoom"));
    const zoomRate = 0.01;
    let newZoom = delta * zoomRate + currentZoom;
   
    const closestZoom = 5; 
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


AFRAME.registerComponent('pointlight', {
    init: function () {
      this.el.setObject3D('light', new THREE.PointLight());
    }
  });
  // <a-entity light></a-entity>

entityEl.addEventListener('physicscollided', function (event) {
    console.log('Entity collided with', event.detail.collidingEntity);
  });

// AFRAME.registerShader('grid-glitch', {
//   schema: {
//     color: {type: 'color', is: 'uniform'},
//     timeMsec: {type: 'time', is: 'uniform'}
//   },
// ​
//   vertexShader: `
// varying vec2 vUv;
// ​
// void main() {
//   vUv = uv;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
// }
// `,
//   fragmentShader: `
// varying vec2 vUv;
// uniform vec3 color;
// uniform float timeMsec; // A-Frame time in milliseconds.
// ​
// void main() {
//   float time = timeMsec / 1000.0; // Convert from A-Frame milliseconds to typical time in seconds.
//   // Use sin(time), which curves between 0 and 1 over time,
//   // to determine the mix of two colors:
//   //    (a) Dynamic color where 'R' and 'B' channels come
//   //        from a modulus of the UV coordinates.
//   //    (b) Base color.
//   // 
//   // The color itself is a vec4 containing RGBA values 0-1.
//   gl_FragColor = mix(
//     vec4(mod(vUv , 0.05) * 20.0, 1.0, 1.0),
//     vec4(color, 1.0),
//     sin(time)
//   );
// }
// `
// });
// ​
