const indexController = {
    prueba: function(req,res){
        res.render('index', {title: 'proyecto'})
       
    }
}

module.exports = indexController
