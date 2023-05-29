const db = require("../database/models");
const bcrypt = require('bcryptjs');

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
        data.clave = bcrypt.hashSync(data.clave, 10)
        
        db.Usuario.create(data)
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
