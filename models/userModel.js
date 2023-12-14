module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        pseudo : {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        }
    })
}