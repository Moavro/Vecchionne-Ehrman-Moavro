module.exports = function (sequelize, DataTypes){

    let alias = "Usuario"

    let cols = {
        id: {
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING(100),
        },
        usuario: {
            type: DataTypes.STRING(100),
        },
        contraseña: {
            type: DataTypes.STRING(100),
        },
        foto_perfil: {
            type: DataTypes.STRING(100),
        },
        fecha_nacimiento: {
            type: DataTypes.DATE,
        },
        dni: {
            type: DataTypes.INTEGER,
        }

    }

    let config = {
        tableName : "usuarios",
        timestamps:true,
        underscored: true,
    };

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;

}