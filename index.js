let express = require('express');
let app = express();
let path = require ("path");


app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname + '/index.html'));
})
//  app.use(express.static("."));



app.use("/", express.static("."));

let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT ||5000;
server.listen(port,() =>{
    console.log("server listening");
});


AFRAME.registerComponent('particle-system', {

    schema: {
        preset: {
            type: 'string',
            default: '',
            oneOf: ['default', 'dust', 'snow', 'rain']
        },
        maxAge: {
            type: 'number',
            default: 6
        },
        positionSpread: {
            type: 'vec3',
            default: { x: 0, y: 0, z: 0 }
        },
        type: {
            type: 'number',
            default: SPE.distributions.BOX
        },
        rotationAxis: {
            type: 'string',
            default: 'x'
        },
        rotationAngle: {
            type: 'number',
            default: 0
        },
        rotationAngleSpread: {
            type: 'number',
            default: 0
        },
        accelerationValue: {
            type: 'vec3',
            default: { x: 0, y: -10, z: 0 }
        },
        accelerationSpread: {
            type: 'vec3',
            default: { x: 10, y: 0, z: 10 }
        },
        velocityValue: {
            type: 'vec3',
            default: { x: 0, y: 25, z: 0 }
        },
        velocitySpread: {
            type: 'vec3',
            default: { x: 10, y: 7.5, z: 10 }
        },
        dragValue: {
            type: 'number',
            default: 0
        },
        dragSpread: {
            type: 'number',
            default: 0
        },
        dragRandomise: {
            type: 'boolean',
            default: false
        },
        color: {
            type: 'array',
            default: [ '#0000FF', '#FF0000' ]
        },
        size: {
            type: 'number',
            default: 1
        },
        direction: {
            type: 'number',
            default: 1
        },
        duration: {
            type: 'number',
            default: null
        },
        particleCount: {
            type: 'number',
            default: 1000
        },
        texture: {
            type: 'asset',
            default: 'https://cdn.rawgit.com/IdeaSpaceVR/aframe-particle-system-component/master/dist/images/star2.png'
        },
        randomise: {
            type: 'boolean',
            default: false
        },
        opacity: {
          type: 'array',
          default: [ '1' ]
        },
        maxParticleCount: {
            type: 'number',
            default: 250000
        },
        blending: {
            type: 'number',
            default: THREE.AdditiveBlending,
            oneOf: [THREE.NoBlending,THREE.NormalBlending,THREE.AdditiveBlending,THREE.SubtractiveBlending,THREE.MultiplyBlending]
        },
        enabled: {
            type:'boolean',
            default:true
        }
    },


    init: function() {

        this.presets = {};

        /* preset settings can be overwritten */

        this.presets['dust'] = {
            maxAge: 20,
            positionSpread: {x:100,y:100,z:100},
            rotationAngle: 3.14,
            accelerationValue: {x: 0, y: 0, z: 0},
            accelerationSpread: {x: 0, y: 0, z: 0},
            velocityValue: {x: 1, y: 0.3, z: 1},
            velocitySpread: {x: 0.5, y: 1, z: 0.5},
            color: ['#FFFFFF'],
            particleCount: 100,
            texture: 'https://cdn.rawgit.com/IdeaSpaceVR/aframe-particle-system-component/master/dist/images/smokeparticle.png'
        };


        this.presets['snow'] = {
            maxAge: 20,
            positionSpread: {x:100,y:100,z:100},
            rotationAngle: 3.14,
            accelerationValue: {x: 0, y: 0, z: 0},
            accelerationSpread: {x: 0.2, y: 0, z: 0.2},
            velocityValue: {x: 0, y: 8, z: 0},
            velocitySpread: {x: 2, y: 0, z: 2},
            color: ['#FFFFFF'],
            particleCount: 200,
            texture: 'https://cdn.rawgit.com/IdeaSpaceVR/aframe-particle-system-component/master/dist/images/smokeparticle.png'
        };


        this.presets['rain'] = {
            maxAge: 1,
            positionSpread: {x:100,y:100,z:100},
            rotationAngle: 3.14,
            accelerationValue: {x: 0, y: 3, z: 0},
            accelerationSpread: {x: 2, y: 1, z: 2},
            velocityValue: {x: 0, y: 75, z: 0},
            velocitySpread: {x: 10, y: 50, z: 10},
            color: ['#FFFFFF'],
            size: 0.4,
            texture: 'https://cdn.rawgit.com/IdeaSpaceVR/aframe-particle-system-component/master/dist/images/raindrop.png'
        };


    },


// let io = require("socket.io").listen(server);
// io.sockets.on("connection", (socket)=>{
//     console.log("new client!!!!"+socket.id);
//     socket.on("data",(data)=>{
//         console.log("data"+data);
//         io.sockets.emit("data",data);
//     });
//     socket.on("touchData",(touchData)=>{
//         console.log("touchData"+touchData);
//         socket.broadcast.emit("touchData",touchData);
//     });
//     socket.on("disconnect", ()=>{
//         console.log("client disconnected"+socket.id);
//     })
// })

