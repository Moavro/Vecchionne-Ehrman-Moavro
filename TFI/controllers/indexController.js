const db = require("../database/models");
const op = db.Sequelize.Op;

const indexController = {
    index: function(req,res){
        db.Producto.findAll({
            order: [["fecha_carga", "DESC"]]    
        }) .then((result) => {
            return res.render ("index",{productos: result})
        }).catch((err) => {
            console.log(err)
        });
    },  
/*         return res.render('index', {
            usuarios: data.usuario,
            productos: data.productos,
            comentados: [data.productos[0], data.productos[1], data.productos[2] ]
        })
    }, */

    headerLogueado: function(req,res){
        return res.render("headerLogueado", {
            usuario: data.usuario
        })
    },

    searchResult: function(req,res){
        let queryString = req.query.search;

        let filtro = {
            where:[{nombre: {[op.like]:`%${queryString}%`}}], 
            order: [["fecha_carga", "DESC"]]
        }


        db.Producto.findAll(filtro) 
        .then((result) => {
            return res.render('search-result', {productos: result })
         }).catch((err) => {
            
        });

    }
}

module.exports = indexController
