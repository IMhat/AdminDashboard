const express = require('express')
const Point = require('../models/Point')



 const renderPoint = async (req, res) =>{

    const points = await Point.find().lean();

    res.render('pointIndex', { points: points });
 
    
 }

 const createPoint = async (req, res) =>{

    try {
     const points = Point(req.body)
 
     await points.save()
  
     res.redirect('/');
     
    } catch (error) {
     console.log(error)
     
    }
 
 
 }

const renderPointEdit = async (req, res) =>{
    
    try {
        const points = await Point.findById(req.params.id).lean();

        res.render("editPoint", {point: point});

    } catch (error) {
        console.log(error.message)
    }


}

const editPoint = async (req, res) =>{
    
    const{id} = req.params

    await Point.findByIdAndUpdate(id, req.body)

    res.redirect('/')
}


const deletePoint = async(req, res) =>{
    const { id } = req.params;
    await Point.findByIdAndDelete(id)
    res.redirect('/')
}

 module.exports = {renderPoint, createPoint, renderPointEdit, editPoint, deletePoint } 