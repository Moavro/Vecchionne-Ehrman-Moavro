const db = require("../database/models");
const op = db.Sequelize.Op;

const indexController = {
    index: function(req,res){
        let filtro = {
            include: [{
              all: true,
              nested: true
            }],
            order: [["created_at", "DESC"]],
          }; 
        db.Producto.findAll(filtro) 
        .then((result) => {
            return res.render ("index",{productos: result})
        }).catch((err) => {
            console.log(err)
        });
    },  

    headerLogueado: function(req,res){
        return res.render("headerLogueado", {
            
        })
    },

    searchResult: function(req,res){
        let queryString = req.query.search;

        let filtro = {
            where: {
                [op.or]: [
                  { nombre: { [op.like]: `%${queryString}%` } },
                  { descripcion: { [op.like]: `%${queryString}%` } }
                ]
              },
            order: [["fecha_carga", "DESC"]],
            include: [{
                all: true,
                nested: true
              }],     
        }

        db.Producto.findAll(filtro) 
        .then((result) => {
             dic = {}
             dic.productos = result
             if(result != ''){
                 let mensaje = 'Aqui estan los resultados de su busqueda'
                 dic.mensaje = mensaje
             return res.render('search-result', [dic])
             } else {
                 let mensaje = 'No hay resultados para su busqueda'
                 dic.mensaje = mensaje
                 return res.render('search-result', [dic])
             }
         }).catch((err) => {
            
        });
        

    }
}

module.exports = indexController
