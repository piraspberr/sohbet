const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 4000;

io.on("connection" , (socket)=>{
  socket.on('stream' , (image)=>{
    socket.emit('stream', image);
  })
})
server.listen(port , ()=>{
  console.log("Server running on port : " + port);
})
