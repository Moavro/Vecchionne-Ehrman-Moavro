const db = require("../database/models");
const op = db.Sequelize.Op;

const indexController = {
    index: function(req,res){
        db.Producto.findAll({
            order: [["fecha_carga", "DESC"]],
            include:[ { association: "usuario"}]    
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
            //where:[{nombre: {[op.like]:`%${queryString}%`}}],
            where: {
                [op.or]: [
                  { nombre: { [op.like]: `%${queryString}%` } },
                  { descripcion: { [op.like]: `%${queryString}%` } }
                ]
              },
            order: [["fecha_carga", "DESC"]],
            include: [{association: "usuario"}]

        }

        db.Producto.findAll(filtro) 
        .then((result) => {
             console.log(result);
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
            /* return res.render('search-result', {productos: result }) */
         }).catch((err) => {
            
        });
        

    }
}

module.exports = indexController
