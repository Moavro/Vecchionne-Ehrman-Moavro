const data = require('../db/data')

const productController = {
    product: function(req,res){
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