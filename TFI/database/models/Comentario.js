module.exports = function (sequelize, dataTypes){

    let alias = "Comentario";

    let cols = {
        id: {
            autoIncrement: true,
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
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }

    }

    let config = {
        tableName : "comentarios",
        timestamps:true,
        underscored: true,
    };

    const Comentario = sequelize.define(alias, cols, config);
        
// Relaciones
    //un comentario pertenece a un producto   
    // un comentario pertenece a un usuario
    Comentario.associate = function(models){
        Comentario.belongsTo(models.Producto,{
            as: "producto",
            foreignKey: "producto_id"
        }),
        Comentario.belongsTo(models.Usuario,{
            as:"usuario",
            foreignKey: "usuario_id"
        })
    }

    return Comentario;

}