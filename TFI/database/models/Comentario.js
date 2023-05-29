module.exports = function (sequelize, dataTypes){

    let alias = "Comentario";

    let cols = {
        id: {
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
        },
        producto_id: {
            type: dataTypes.INTEGER,
        },
        comentario: {
            type: dataTypes.STRING(500),
        }

    }

    let config = {
        tableName : "comentarios",
        timestamps:true,
        underscored: true,
    };

    const Comentario = sequelize.define(alias, cols, config);
        //un comentario pertenece a un producto 
        // un comentario pertenece a un usuario

    Comentario.associate = function(models){
        Comentario.belongsTo(models.Producto,{
            as: "producto",
            foreignKey: "producto_id"
        }),
        Comentario.belongsTo(models.Producto,{
            as:"usuario",
            foreignKey: "usuario_id"
        })
    }

    return Comentario;

}