module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comments', {
        text: {
            type: DataTypes.STRING
        }
    })
}