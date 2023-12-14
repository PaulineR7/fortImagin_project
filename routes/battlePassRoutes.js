const express = require('express')
const router = express.Router()
const {findAllBattlePass, createBattlePass} =require('../controllers/battlePassControllers')



router
    .route('/')
    .get(findAllBattlePass)
    .post(createBattlePass)
    


module.exports = router