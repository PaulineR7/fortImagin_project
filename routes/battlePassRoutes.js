const express = require('express')
const router = express.Router()
const multer = require('../middleware/multer-config');
const { BattlePass } = require('../db/sequelizeSetup')
const {findAllBattlePass, findBattlePassByPk, createBattlePassWithImg, updateBattlePassWithImg, deleteBattlePass} =require('../controllers/battlePassControllers')
const { protect, restrictToOwnUser } = require('../controllers/authControllers')



router
    .route('/')
    .get(findAllBattlePass)

router
    .route('/withImg')
    .post(protect, multer, createBattlePassWithImg)

    router
    .route('/withImg/:id')
    .put(protect, restrictToOwnUser(BattlePass), multer, updateBattlePassWithImg)
    .delete(protect, restrictToOwnUser(BattlePass), deleteBattlePass)

router
    .route('/rawsql')
    

router
    .route('/:id')
    .get(findBattlePassByPk)
    


module.exports = router