const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());


server.get("/", (req,res)=>{
    res.send("Let's get this party started!")
})

module.exports = server;