const express = require('express')
// const Task = require('../models/Task')

// const keycloak = require('../config/keycloak-config').getKeycloak()

const {renderIndex} = require('../controllers/index.controller')


const router = express.Router()


router.get('/',  renderIndex);



module.exports = router;