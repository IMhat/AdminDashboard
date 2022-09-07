const express = require('express')
const Task = require('../models/Task')

const renderIndex = async (req, res) =>{

    // const tasks = await Task.find().lean();
 
     res.render('index.hbs');
 }



 module.exports = {renderIndex} 