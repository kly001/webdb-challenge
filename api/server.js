const express = require('express');
const helmet = require('helmet');



const server = express();
server.use(helmet());
server.use(express.json());


// const actionsRouter = require('..data/helpers/actions-router.js');
// const projectsRouter = require('..data/helpers/projects-router.js');

// server.use("api/actions", actionsRouter);
// server.use("api/projects", projectsRouter);

server.get("/", (req,res)=>{
    res.send("Let's get this party started!")
})

module.exports = server;