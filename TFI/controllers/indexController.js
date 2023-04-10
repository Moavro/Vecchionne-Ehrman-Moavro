const indexController = {
    index: function(req,res){
        res.render('index')
       
       
    },
    searchResult: function(req,res){
        res.render('search-result')
       
    }
}

module.exports = indexController
