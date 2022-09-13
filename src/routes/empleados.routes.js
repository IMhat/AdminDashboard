const express = require('express')
const Empleados = require('../models/Empleados')
// const keycloak = require('../config/keycloak-config').getKeycloak()

const {renderEmpleados, createEmpleado, renderEmpleadoEdit, editEmpleado, deleteEmpleado} = require('../controllers/empleados.controller')


const router = express.Router()




router.get('/empleados', renderEmpleados);

router.post('/empleados/add',createEmpleado);


router.get('/empleados/:id/edit', renderEmpleadoEdit);


router.post('/empleados/:id/edit', editEmpleado)


router.get('/empleados/:id/delete', deleteEmpleado)


// router.get('/empleados/:id/toggleDone', taskToggleDone )

module.exports = router;