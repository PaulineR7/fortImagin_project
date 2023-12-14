const { BattlePass } = require('../db/sequelizeSetup')

const findAllBattlePass= (req, res) => {
    BattlePass.findAll()
        .then((results) => {
            res.json(results)
        })
        .catch(error => {
            res.status(500).json(error.message)
        })
}


const createBattlePass= (req,res) => {
    console.log(req.body)
    BattlePass.create(req.body)
        .then(battlepass => {
            res.json({message: `Le battle Pass a bien été créé` , data: battlepass})
        })
}



module.exports = {findAllBattlePass, createBattlePass}