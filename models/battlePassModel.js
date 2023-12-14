module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Battle', {
        title: {
            type: DataTypes.STRING
        },
        text: {
            type: DataTypes.STRING
        }
    })
}