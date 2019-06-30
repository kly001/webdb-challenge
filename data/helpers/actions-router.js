const express = require('express');
const Actions = require('../helpers/action-model.js');
// console.log(Actions)
const router = express.Router();

router.use(express.json())


router.get("/", async(req, res) => {
    try {
      const actions = await Actions.get();
      res.status(200).json(actions);
    } catch (error) {
      res.status(500).json({
        message: 'Error getting the actions'});
    }
  });

  router.get("/:id", async(req, res) => {
    try {
      const actions = await Actions.get(req.params.id);
      res.status(200).json(actions);
    } catch (error) {
      res.status(500).json({
        message: 'Error getting the actions'});
    }
  });

  router.post("/", async(req,res)=> {
      try{
          const newAction = await Actions.insert(req.body);
          res.status(201).json(newAction)
      } catch (error) {
          res.status(500).json({message: "Error posting actions"});
      }
  });

module.exports = router