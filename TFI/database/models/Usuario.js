module.exports = function (sequelize, DataTypes){

    let alias = "Usuario"

    let cols = {
        id: {
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER 
        },
        email: {
            type: dataTypes.STRING(100)
        }

    }

}