const data= require('../db/data')

const indexController = {
    index: function(req,res){
        res.render('index', {
            usuarios: data.usuario,
            productos: data.productos
        })
       
       
    },
    searchResult: function(req,res){
        res.render('search-result')
       
    }
}

module.exports = indexController
