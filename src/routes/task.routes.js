const express = require('express')
const Task = require('../models/Task')
const {renderTask, createTask, renderTaskEdit, editTask, deleteTask, taskToggleDone} = require('../controllers/task.controller')






const router = express.Router()




router.get('/task', renderTask);

router.post('/tasks/add', createTask);


router.get('/tasks/:id/edit', renderTaskEdit);


router.post('/tasks/:id/edit', editTask)


router.get('/tasks/:id/delete', deleteTask)


router.get('/tasks/:id/toggleDone', taskToggleDone )

module.exports = router;