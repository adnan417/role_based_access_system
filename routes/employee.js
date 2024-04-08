const express = require('express');
const {body,validationResult} = require('express-validator');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

const {authenticate}=require('../middlewares/authenticate');
const {authorize}=require('../middlewares/authorize');

router.get('/:id/dashboard',authenticate,(req,res,next)=>{authorize(req,res,next,['employee'])},employeeController.getDashboard);
router.post('/register',[body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),body('password').isLength({min:8}).withMessage('Password must be atleast 8 characters length')],(req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ 
            flag:false,
            message: errors.array() 
        });
    }
},employeeController.createAccount);

module.exports=router;