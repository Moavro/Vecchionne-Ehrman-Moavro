const data = require('../db/data')
const db = require("../database/models");
const producto = db.Producto; 

const productController = {
    show: function(req,res){
        let idBuscado = req.params.id;

        let relacion = {
            include: [
                 {association: "comentarios",include: [{association: "usuario"}]},
                 { association: "usuario"}
            ]
        }

        producto.findByPk(idBuscado, relacion)
            .then((result) => {
                console.log(result);
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
        if (req.session.user != undefined){
            return res.render("product-add");
         } else {
            return res.render("login")
         }  
        /* return res.render('product-add', {
            usuario: data.usuario
        }) */

       
    },
    storeProduct:function(req,res){
        let info = req.body
        info.usuario_id = req.session.user.id
        producto.create(info)
        .then((result) => {
            return res.redirect("product-add")
        }).catch((err) => {
            console.log(err)
        });


        
    } 

}

module.exports = productController