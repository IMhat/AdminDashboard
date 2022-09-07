const express = require('express')
const Task = require('../models/Task')

const renderTask = async (req, res) =>{

    const tasks = await Task.find().lean();
 
     res.render('taskIndex', { tasks: tasks});
 }


const createTask = async (req, res) =>{

    try {
     const task = Task(req.body)
 
     await task.save()
  
     res.redirect('/');
     
    } catch (error) {
     console.log(error)
     
    }
 
 
 }

const renderTaskEdit = async (req, res) =>{
    
    try {
        const task = await Task.findById(req.params.id).lean();

        res.render("editTask", {task: task});
    } catch (error) {
        console.log(error.message)
    }


}

const editTask = async (req, res) =>{
    
    const{id} = req.params

    await Task.findByIdAndUpdate(id, req.body)

    res.redirect('/')
}


const deleteTask = async(req, res) =>{
    const { id } = req.params;
    await Task.findByIdAndDelete(id)
    res.redirect('/')
}

const taskToggleDone = async (req, res) =>{
    const {id} = req.params;

    const task = await Task.findById(id)

    task.done = !task.done;

    await task.save();

    res.redirect('/')

    
}

 module.exports = {renderTask, createTask, renderTaskEdit, editTask, deleteTask, taskToggleDone} 