const express = require('express')
const Point = require('../models/Point')

const {renderPoint} = require('../controllers/point.controller')


const router = express.Router()




router.get('/point', renderPoint);

// router.post('/point/add', createTask);


// router.get('/point/:id/edit', renderTaskEdit);


// router.post('/point/:id/edit', editTask)


// router.get('/point/:id/delete', deleteTask)


// router.get('/point/:id/toggleDone', taskToggleDone )

module.exports = router;