const express = require('express')
const Point = require('../models/Point')

const renderPoint = async (req, res) =>{

    // const tasks = await Task.find().lean();
 
     res.render('pointIndex');
 }

 module.exports = {renderPoint} 