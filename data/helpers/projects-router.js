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
        message: 'Action could not be completed',
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
        message: 'Action could not be completed- projectId',
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
        message: 'Error adding the new project',
      });
    }
  });

  router.put('/:id', async(req, res) => {
    try {
      const updateProject = await Projects.update(req.params.id, req.body);
      if (updateProject) {
        res.status(200).json(updateProject);
      } else {
        res.status(404).json({ message: 'The project could not be found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error updating the project',
      });
    }
  });

  router.delete('/:id', async(req, res) => {
    try {
      const deleteProject = await Projects.remove(req.params.id);
      if (deleteProject > 0) {
        res.status(200).json({ message: 'The project has been removed' });
      } else {
        res.status(404).json({ message: 'The project could not be found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error removing the project',
      });
    }
  });

module.exports = router