const data = require('../db/data')

const productController = {
    show: function(req,res){
        res.render('product', {
            productos: data.productos,
            comentarios: data.comentarios,
            id: req.params.id
        } )
       
    },
    productAdd: function(req,res){
        res.render('product-add')
       
    } 

}

module.exports = productController