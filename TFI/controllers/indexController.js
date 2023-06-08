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
            
        })
    },

    searchResult: function(req,res){
        let queryString = req.query.search;
        console.log(queryString);

        let filtro = {
            where:[{nombre: {[op.like]:`%${queryString}%`}}],
            //where: {[Op.or]: [{ nombre: { [Op.like]: `%${queryString}%` } },{ descripcion: { [Op.like]: `%${queryString}%` } }],
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
