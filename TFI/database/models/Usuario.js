module.exports = function (sequelize, dataTypes){

    let alias = "Usuario"

    let cols = {
        id: {
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING(100),
        },
        usuario: {
            type: dataTypes.STRING(100),
        },
        contraseña: {
            type: dataTypes.STRING(100),
        },
        foto_perfil: {
            type: dataTypes.STRING(100),
        },
        fecha_nacimiento: {
            type: dataTypes.DATE,
        },
        dni: {
            type: dataTypes.INTEGER,
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }

    }

    let config = {
        tableName : "usuarios",
        timestamps:true,
        underscored: true,
    };

    const Usuario = sequelize.define(alias, cols, config);
    // un usuario tiene muchos productos cargados
    //un usuario tiene muchos comentarios
    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto,{
            as: "productos",
            foreignKey: "usuario_id"
        }),
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey:"usuario_id"
        })

    }

    return Usuario;

}