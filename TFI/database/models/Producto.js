module.exports = function (sequelize, dataTypes){

    let alias = "Producto";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
        },
        nombre: {
            type: dataTypes.STRING(100),
        },
        descripcion: {
            type: dataTypes.STRING(500),
        },
        foto_producto: {
            type: dataTypes.STRING(100),
        },
        fecha_carga: {
            type: dataTypes.DATE,
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }

    }

    let config = {
        tableName : "productos",
        timestamps:true,
        underscored: true,
    };

    const Producto = sequelize.define(alias, cols, config);

// Relaciones
    Producto.associate = function(models) {
        Producto.belongsTo(models.Usuario, {
            as : "usuario",
            foreignKey: "usuario_id"
        }),
        Producto.hasMany(models.Comentario,{
            as: "comentarios",
            foreignKey: "producto_id"
        })
     };

    return Producto;

}