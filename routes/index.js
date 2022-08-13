const express = require('express')
const router = express.Router()

// @desc    Login/Landing Page
// @route   Get / 

router.get('/',(req,res)=>{
    res.send('Hello World')
})

// @desc    Dashboard
// @route   Get /dashboard 

router.get('/dashboard',(req,res)=>{
    res.send('Dashboard')
})

module.exports = router;