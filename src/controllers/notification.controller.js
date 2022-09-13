const express = require('express')
const Notification = require('../models/Notification')



 const renderNotification = async (req, res) =>{

    const notifications = await Notification.find().lean();

    res.render('notificationIndex', { notifications: notifications});
 
    
 }

 const createNotification = async (req, res) =>{

    try {
     const notifications = Notification(req.body)
 
     await notifications.save()
  
     res.redirect('/');
     
    } catch (error) {
     console.log(error)
     
    }
 
 
 }

const renderNotificationEdit = async (req, res) =>{
    
    try {
        const notifications = await Notification.findById(req.params.id).lean();

        res.render("editNotification", {Notification: notification});

    } catch (error) {
        console.log(error.message)
    }


}

const editNotification = async (req, res) =>{
    
    const{id} = req.params

    await Notification.findByIdAndUpdate(id, req.body)

    res.redirect('/')
}


const deleteNotification = async(req, res) =>{
    const { id } = req.params;
    await Notification.findByIdAndDelete(id)
    res.redirect('/')
}

 module.exports = {renderNotification, createNotification, renderNotificationEdit, editNotification, deleteNotification } 