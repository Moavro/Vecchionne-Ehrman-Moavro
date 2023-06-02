const db = require("../database/models");
const profile = db.Usuario;
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
        errors = {};
        
        if(data.email == ""){
            errors.mensaje = 'Debes ingresar tu email'
            res.locals.errors = errors
            return res.render('register')
        } else if(data.clave == ''){
            errors.mensaje = 'Ingresa una contraseña'
            res.locals.error = error
            return res.render('register')
        } else if(data.clave.length < 3){
            errors.mensaje = "La contraseña debe tener 3 o mas caracteres"
            res.locals.errors = errors
            return res.render('register')
        } else {
            data.clave = bcrypt.hashSync(data.clave, 10)
            db.Usuario.create(data)
            .then((result) => {
                return res.redirect("/profile/login")
            }).catch((err) => {
                console.log(err);
            });
        }
        
       
       
    },
    profileEdit: function(req,res){
        return res.render('profile-edit',{
            usuario: data.usuario
        })
       
    },
    login: function(req,res){
        return res.render('login')
       
    },
    storeLogin: function(req,res){
        let emailInsertado = req.body.email
        let claveInsertada = req.body.clave

        let filtrado = {
            where: [{email: emailInsertado}]
        } 

        db.Usuariogit .findOne(filtrado)
        .then((result) => {
            if (result != null) {
                let claveCorrecta = bcrypt.compareSync(claveInsertada, result.clave)
                if(claveCorrecta){
                    return res.redirect("/profile/login")
                } else {
                    return res.send('La clave es incorrecta')
                }
                
            } else {
                return res.send('no kumpi, el mail no existe')
            }
            
        }).catch((err) => {
            console.log(err);
            
        });
        
    }
}

module.exports = profileController
