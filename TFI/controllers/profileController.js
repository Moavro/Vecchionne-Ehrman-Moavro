const profileController = {
    profile: function(req,res){
        res.render('profile')
       
    },
    register: function(req,res){
        res.render('register')
       
    },
    profileEdit: function(req,res){
        res.render('profile-edit')
       
    },
    login: function(req,res){
        res.render('login')
       
    }
}

module.exports = profileController
