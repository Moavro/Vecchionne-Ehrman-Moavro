const data = require('../db/data')
const db = require("../database/models");
const producto = db.Producto; 
const comentario = db.Comentario;

const productController = {
    show: function(req,res){
        let idBuscado = req.params.id;

        let relacion = {
            include: [
                 {association: "comentarios", include: [{association: "usuario"}]},
                 { association: "usuario"}
            ], 
            order: [["created_at", "DESC"]]
        }

         producto.findByPk(idBuscado, relacion)
            .then((result) => {
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
        let filtro = {
            include: [{
              all: true,
              nested: true
            }]
          }; 

        producto.findByPk(id, filtro)
        .then((result) => {
            if (req.session.user && req.session.user.id === result.usuario_id){
                return res.render("product-edit", {productos:result});
             } else  {
                return res.render("product", {productos:result});
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

     },
    storeComentario: function(req,res){   
        if (req.session.user != undefined) {
            
            let data = req.body
            data.usuario_id = req.session.user.id
            data.producto_id = req.params.id
            if (data.comentario != "") {
                    comentario.create(data)
                        .then((result) => {
                            return res.redirect(`/product/detail/${data.producto_id}`)  
                        }).catch((err) => {
                            console.log(err)
                        });
            } else {
                let relacion = {
                    include: [
                         {association: "comentarios", include: [{association: "usuario"}]},
                         { association: "usuario"}
                    ], 
                    order: [["created_at", "DESC"]]
                }
        
                 producto.findByPk(data.producto_id, relacion)
                    .then((result) => {
                        return res.render('product', {productos: result})
                    }).catch((err) => {
                        console.log(err)
                    }); 
                }
        } 
    }

}

module.exports = productController