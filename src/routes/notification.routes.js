const express = require('express')
const Notification = require('../models/Notification')
// const keycloak = require('../config/keycloak-config').getKeycloak()

const {renderNotification, createNotification, renderNotificationEdit, editNotification, deleteNotification } = require('../controllers/notification.controller')


const router = express.Router()




router.get('/notification', renderNotification);

router.post('/notification/add', createNotification);


router.get('/notification/:id/edit', renderNotificationEdit);


router.post('/notification/:id/edit', editNotification);


router.get('/notification/:id/delete', deleteNotification)


// router.get('/point/:id/toggleDone', taskToggleDone )

module.exports = router;