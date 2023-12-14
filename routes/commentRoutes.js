const express = require('express')
const router = express.Router()
const { createComment, findAllComment } =require('../controllers/commentControllers')


router
    .route('/')
    .get(findAllComment)
    .post(createComment)


module.exports= router