const data = require("../db/data");
const profileController = {
    profile: function(req,res){
        res.render('profile', {
            email: data.usuario.email,
            usuario: data.usuario.usuario,
            fotoPerfil: data.usuario.fotoPerfil,
            documento: data.usuario.documento,
            fechaNacimiento: data.usuario.fechaNacimiento,
            usuarios: data.usuario,
            productos: data.productos

        })
       
    },
    register: function(req,res){
        res.render('register')
       
    },
    profileEdit: function(req,res){
        res.render('profile-edit',{
            usuario: data.usuario
        })
       
    },
    login: function(req,res){
        res.render('login')
       
    }
}

module.exports = profileController
