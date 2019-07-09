const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const logger = require("morgan")

const knexConfig = require("../knexfile.js");
  
const db = knex(knexConfig.development);


const server = express();
server.use(helmet());
server.use(express.json());
server.use(logger("dev"));


server.get("/", (req,res)=>{
    res.send("Let's get this party started! webdb-Sprint Challenge")
})

//list all projects
server.get("/api/projects", async (req, res) => {
    try {
      const projects = await db("projects"); 
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json(error);
    }
  });


  // list a project by id
server.get("/api/projects/:id", async (req, res) => {
  try {
    const project = await db("projects")
      .where({ id: req.params.id })
      .first()
      const action = await db("actions")
      .where({ project_id: req.params.id })
      .first()
    res.status(200).json({...project,action});
  } catch (error) {
    res.status(500).json(error);
  }
});
server.get("/api/actions", async (req, res) => {
  try {
    const actions = await db("actions")
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json(error);
  }
});

// list a project by id with actions - DOESN'T WORK
server.get("/api/actions/:id/", async (req, res) => {
  try {
    const actions = await db("actions")
      .where({ id: req.params.id })
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json(error);
  }
});

  
  

  //create a new project
  server.post("/api/projects", async (req, res) => {
    try {
      const [id] = await db("projects").insert(req.body);
      const project = await db("projects")
        .where({ id })
        .first();
  
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ message, error });
    }
  });

  //create a new action
  server.post("/api/actions", async (req, res) => {
    try {
      const action = await db("actions").insert(req.body)
      res.status(201).json(action);
    } catch (error) {
      res.status(500).json({ message, error });
    }
  });
  
  
  // remove a project
  server.delete("/api/projects/:id", async (req, res) => {
    try {
      const count = await db("projects")
        .where({ id: req.params.id })
        .del();
  
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Projects not found" });
      }
    } catch (error) {
      res.status(500).json({ message, error });
    }
  });



module.exports = server;