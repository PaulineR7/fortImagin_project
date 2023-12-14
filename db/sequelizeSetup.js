const { Sequelize, DataTypes } = require('sequelize');
const battlePassModel = require('../models/battlePassModel')
const userModel = require('../models/userModel')
const roleModel = require('../models/roleModel')
const commentModel = require('../models/commentModel')


const sequelize = new Sequelize('FortImagin', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false
})

const BattlePass = battlePassModel(sequelize, DataTypes)
const User = userModel(sequelize, DataTypes)
const Role = roleModel(sequelize, DataTypes)
const Comment = commentModel(sequelize, DataTypes)

sequelize.authenticate()
    .then(() => console.log('La connexion à la base de données a bien été établie.'))
    .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))


sequelize.sync({ force: true })
    .then(async () => {
    
    })
    .catch(error => {
        console.log(error)
    })





module.exports = {sequelize, BattlePass, User, Role, Comment}