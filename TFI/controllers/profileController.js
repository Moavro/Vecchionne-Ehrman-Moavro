const db = require("../database/models");

const profileController = {
    show: function(req,res){
        return res.render('profile', {
            email: data.usuario.email,
            usuario: data.usuario,
            fotoPerfil: data.usuario.fotoPerfil,
            documento: data.usuario.documento,
            fechaNacimiento: data.usuario.fechaNacimiento,
            usuarios: data.usuario,
            productos: data.productos

        })
       
    },
    register: function(req,res){
        return res.render('register')
       
    },
    store: function(req,res){
        let data = req.body

        let datosUsuario= {
            mail: data.mail,
            usuario: data.usuario,
            password: data.password,
            nacimiento: data.nacimiento,
            documento: data.documento
        }
       
        db.Usuario.create(datosUsuario)
        .then((result) => {
            return res.redirect("/profile/login")
        }).catch((err) => {
            console.log(err);
        });
       
    },
    profileEdit: function(req,res){
        return res.render('profile-edit',{
            usuario: data.usuario
        })
       
    },
    login: function(req,res){
        return res.render('login')
       
    }
}

module.exports = profileController
