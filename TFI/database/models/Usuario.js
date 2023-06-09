module.exports = function (sequelize, dataTypes) {

    let alias = "Usuario"

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING(100),
        },
        usuario: {
            type: dataTypes.STRING(100),
        },
        clave: {
            type: dataTypes.STRING(300),
        },
        foto_perfil: {
            type: dataTypes.STRING(1000),
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
        tableName: "usuarios",
        timestamps: true,
        underscored: true,
    };

    const Usuario = sequelize.define(alias, cols, config);
    
// Relaciones
    // un usuario tiene muchos productos cargados
    //un usuario tiene muchos comentarios
    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "usuario_id"
        }),
            Usuario.hasMany(models.Comentario, {
                as: "comentarios",
                foreignKey: "usuario_id"
            })

    }

    return Usuario;

}