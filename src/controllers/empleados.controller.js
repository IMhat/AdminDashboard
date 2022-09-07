const express = require('express');
const Empleados = require('../models/Empleados');


const renderEmpleados = async (req, res) =>{

    const empleado = await Empleados.find().lean();
 
     res.render('empleadosIndex', { empleado: empleado });
 }

 const createEmpleado = async (req, res) =>{

    try {
     const empleado = Empleados(req.body)
 
     await empleado.save()
  
     res.redirect('/');
     
    } catch (error) {
     console.log(error)
     
    }
 
 
 }

const renderEmpleadoEdit = async (req, res) =>{
    
    try {
        const empleado = await Empleados.findById(req.params.id).lean();

        res.render("editEmpleado", {empleado: empleado});

    } catch (error) {
        console.log(error.message)
    }


}

const editEmpleado = async (req, res) =>{
    
    const{id} = req.params

    await Empleados.findByIdAndUpdate(id, req.body)

    res.redirect('/')
}


const deleteEmpleado = async(req, res) =>{
    const { id } = req.params;
    await Empleados.findByIdAndDelete(id)
    res.redirect('/')
}



 module.exports = {renderEmpleados, createEmpleado, renderEmpleadoEdit, editEmpleado, deleteEmpleado } 