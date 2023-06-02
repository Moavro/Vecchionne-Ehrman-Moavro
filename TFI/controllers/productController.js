const data = require('../db/data')
const db = require("../database/models");
const producto = db.Producto; 

const productController = {
    show: function(req,res){
        let idBuscado = req.params.id;
        producto.findByPk(idBuscado)
            .then((result) => {
                return res.render('product', {productos: result})
            }).catch((err) => {
                console.log(err)
            }); 
        },
/*         return res.render('product', {
            productos: data.productos,
            comentarios: data.comentarios,
            id: req.params.id
        } ) */
       
    productAdd: function(req,res){
        return res.render('product-add', {
            usuario: data.usuario
        })
       
    } 

}

module.exports = productController