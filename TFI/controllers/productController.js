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
       
    productAdd: function(req,res){
        if (req.session.user != undefined){
            return res.render("product-add");
         } else {
            return res.render("login")
         }  
       
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
      },
    edit: function (req,res) {
        let id = req.params.id

        producto.findByPk(id)
        .then((result) => {
            if (req.session.user.id == producto.usuario_id){
                return res.redirect("product-edit", {productos:result});
             } else {
                return res.render("login")
             }  
        }).catch((err) => {
            console.log("Este es el error de mierda" + err)
        });
     },
     storeEdit: function (req,res) {
        let info = req.body
        let id = req.params.id
        filtro = { where :[{id : id}]}

        producto.update(info,filtro)
        .then((result) => {
            return res.redirect("/product/detail/" + id)
        }).catch((err) => {
            console.log(err)
            
        });

     }

}

module.exports = productController