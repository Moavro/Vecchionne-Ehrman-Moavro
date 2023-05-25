module.exports = function (sequelize, DataTypes){

    let alias = "Comentario";

    let cols = {
        id: {
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
        },
        producto_id: {
            type: DataTypes.INTEGER,
        },
        comentario: {
            type: DataTypes.STRING(500),
        }

    }

    let config = {
        tableName : "comentarios",
        timestamps:true,
        underscored: true,
    };

    const Comentario = sequelize.define(alias, cols, config);

    return Comentario;

}