const express = require('express');
const Projects = require('../helpers/projectModel.js');
// console.log(Projects)
const router = express.Router();

router.use(express.json());


router.get('/', async (req, res) => {
    try {
      const project = await Projects.get(req.query);
      console.log(project)
      res.status(200).json(project);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error getting all projects',
      });
    }
  });

  router.get('/:id', async(req, res) => {
    try {
      const projectId = await Projects.get(req.query);
      res.status(200).json(projectId);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error getting project',
      });
    }
  });

  router.post('/', async(req, res) => {
    try {
      const newProject = await Projects.add(req.body);
      res.status(201).json(newProject);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error adding new project',
      });
    }
  });



module.exports = router