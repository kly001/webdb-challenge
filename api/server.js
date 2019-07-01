const express = require('express');
const helmet = require('helmet');
const knex = require("knex");

const knexConfig = require("../knexfile.js");
  
const db = knex(knexConfig.development);


const server = express();
server.use(helmet());
server.use(express.json());


// const actionsRouter = require('.helpers/actions-router.js');
// const projectsRouter = require('.helpers/projects-router.js');

// server.use("api/actions", actionsRouter);
// server.use("api/projects", projectsRouter);

server.get("/", (req,res)=>{
    res.send("Let's get this party started!")
})

// server.get("/api/projects", (req,res) => {
//     res.send(" Projects")
// })

server.get('/api/projects', async (req, res) => {
    // get the projects from the database
    try {
      const projects = await db('projects'); // all the records from the table
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = server;