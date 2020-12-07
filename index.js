let express = require("express");
let app = express();
let path = require ("path");


let bodyParser = require ("body-parser");
app.use(bodyParser.json())



app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.use(express.static("."));

let express = require('express');
let app = express();
app.use("/", express.static("."));

let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT ||5000;
server.listen(port,() =>{
    console.log("server listening");
});


let io = require("socket.io").listen(server);
io.sockets.on("connection", (socket)=>{
    console.log("new client!!!!"+socket.id);
    socket.on("data",(data)=>{
        console.log("data"+data);
        io.sockets.emit("data",data);
    });
    socket.on("touchData",(touchData)=>{
        console.log("touchData"+touchData);
        socket.broadcast.emit("touchData",touchData);
    });
    socket.on("disconnect", ()=>{
        console.log("client disconnected"+socket.id);
    })
})


<!-- // Create a new asset -->
var new_asset = document.createElement('video');
new_asset.setAttribute('id', 'dynVid'); 
<!-- // Create a unique id for asset -->
new_asset.setAttribute('src', videoUrl);

<!-- // Append the new video to the a-assets, where a-assets id="assets-id" -->
document.getElementById('assets-id').appendChild(new_asset);
<!--           
// Add the asset to the a-video -->
screen.setAttribute('src', '#dynVid');
<!-- // Start playback -->
new_asset.play();
// app.listen(3000, ()=> 
// {
//     console.log("listening at localhost:3000");
// }
// )