const { User } = require('../db/sequelizeSetup')


const findAllUsers = (req, res) => {
    User.findAll()
        .then((results) => {
            res.json(results)
        })
        .catch(error => {
            res.status(500).json(error.message)
        })
}
const createUser = (req,res) => {
    User.create(req.body)
        .then(user => {
            res.json({message :"L'utilisateur a bien été créé", data: user})
        })
}


module.exports = {createUser, findAllUsers}