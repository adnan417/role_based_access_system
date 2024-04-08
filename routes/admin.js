const express = require('express');
const router = express.Router();

const {authenticate}=require('../middlewares/authenticate');
const {authorize}=require('../middlewares/authorize');

const adminController = require('../controllers/adminController');

router.get('/:id/dashboard',authenticate,(req,res,next)=>{authorize(req,res,next,['admin'])},adminController.getDashboard);

module.exports=router;