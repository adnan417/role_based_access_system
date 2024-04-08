const express = require('express');
const router = express.Router();

const supervisorController = require('../controllers/supervisorController');

const {authenticate}=require('../middlewares/authenticate');
const {authorize}=require('../middlewares/authorize');

router.get('/:id/dashboard',authenticate,(req,res,next)=>{authorize(req,res,next,['supervisor'])},supervisorController.getDashboard);

module.exports=router;