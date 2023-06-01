const data = require('../db/data')
const db = require("../database/models");
const product = db.Product;

const productController = {
    show: function(req,res){
        return res.render('product', {
            productos: data.productos,
            comentarios: data.comentarios,
            id: req.params.id
        } )
       
    },
    productAdd: function(req,res){
        return res.render('product-add', {
            usuario: data.usuario
        })
       
    } 

}

module.exports = productController