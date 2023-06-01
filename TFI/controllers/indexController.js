const data= require('../db/data')
const db = require("../database/models");

const indexController = {
    index: function(req,res){
        return res.render('index', {
            usuarios: data.usuario,
            productos: data.productos,
            comentados: [data.productos[0], data.productos[1], data.productos[2] ]
        })
    },

    headerLogueado: function(req,res){
        return res.render("headerLogueado", {
            usuario: data.usuario
        })
    },

    searchResult: function(req,res){
        return res.render('search-result', {
            usuarios: data.usuario,
            productos: data.productos
        })
    }
}

module.exports = indexController
