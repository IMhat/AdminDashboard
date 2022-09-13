// const express = require('express')
// const router = express.Router()

// const keycloak = require('../config/keycloak-config.js').getKeycloak()


// router.get('/anonymous', function(req, res){
//     res.send('Hello anonymus')
// })

// router.get('/user', keycloak.protect('user'), function(req, res){
//     res.send('Hello user')
// })

// router.get('/admin', keycloak.protect('admin') , function(req, res){
//     res.send('Hello admin')
// })

// router.get('/all-user', keycloak.protect(['user', 'admin']) , function(req, res){
//     res.send('Hello all user')
// })

// module.exports = router