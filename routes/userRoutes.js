const express = require('express')
const router = express.Router()
const {createUser, findAllUsers} =require('../controllers/userControllers')


router
    .route('/')
    .get(findAllUsers)
    .post(createUser)





module.exports = router