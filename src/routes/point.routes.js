const express = require('express')
const Point = require('../models/Point')

// const keycloak = require('../config/keycloak-config').getKeycloak()

const {renderPoint, createPoint, renderPointEdit, editPoint, deletePoint } = require('../controllers/point.controller')


const router = express.Router()




router.get('/point',  renderPoint);

router.post('/point/add',  createPoint);


router.get('/point/:id/edit',  renderPointEdit);


router.post('/point/:id/edit', editPoint);


router.get('/point/:id/delete',  deletePoint)


// router.get('/point/:id/toggleDone', taskToggleDone )

module.exports = router;