module.exports = function (sequelize, DataTypes){

    let alias = "Producto";

    let cols = {
        id: {
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
        },
        nombre: {
            type: DataTypes.STRING(100),
        },
        descripcion: {
            type: DataTypes.STRING(500),
        },
        foto_producto: {
            type: DataTypes.STRING(100),
        },
        fecha_carga: {
            type: DataTypes.DATE,
        }

    }

    let config = {
        tableName : "productos",
        timestamps:true,
        underscored: true,
    };

    const Producto = sequelize.define(alias, cols, config);

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