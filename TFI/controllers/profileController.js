const db = require("../database/models");
const data = require("../db/data")
const profile = db.Usuario;
const bcrypt = require('bcryptjs');

const profileController = {
    show: function(req,res){
        let filtro = {
            include: [{association: 'productos'}],
            order: [["created_at", "DESC"]]
        }
        console.log(req.session.user);
        idUser = req.params.id
        profile.findByPk(idUser, filtro)
                .then((result) => {
                    if (idUser = req.session.user.id) {
                        return res.render('profile', {usuario: result})     
                    } else {
                        return res.render('profile', {usuario: result})
                    }
                }).catch((err) => {
                    console.log(err);
                });
           
    /*     return res.render('profile', {
            email: data.usuario.email,
            usuario: data.usuario,
            fotoPerfil: data.usuario.fotoPerfil,
            documento: data.usuario.documento,
            fechaNacimiento: data.usuario.fechaNacimiento,
            usuarios: data.usuario,
            productos: data.productos

        })
        */
    },
    register: function(req,res){
        if (req.session.user != undefined){
            return res.redirect("/index");
         } else {
            return res.render("register")
         } 
    },
    store: function(req,res){
        let data = req.body 
        errors = {};

        db.Usuario.findOne({
            where: [{email:data.email}]

        }).then((result) => {
            if(data.email == ""){
                errors.mensaje = 'Debes ingresar tu email'
                res.locals.errors = errors
                return res.render('register')
            } else if (result != null){
                errors.mensaje = "el mail ingresado ya existe"
                res.locals.errors= errors
                return res.render("register")
            } else if(data.clave == ""){
                errors.mensaje = 'Ingresa una contraseña'
                res.locals.errors = errors
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
        if (req.session.user != undefined){
            return res.redirect("/index");
         } else {
            return res.render("login")
         }  
    },
    storeLogin: function(req,res){
        let emailInsertado = req.body.email
        let claveInsertada = req.body.clave
        console.log(req.body);

        let filtrado = {
            where: [{email: emailInsertado}/* ,
            {clave:claveInsertada} */]
        } 

        errors = {}

        db.Usuario.findOne(filtrado)
        .then((result) => {
            if (result != null) {
                let claveCorrecta = bcrypt.compareSync(claveInsertada, result.clave)
                if(claveCorrecta){
                    req.session.user = result.dataValues
                    if(req.body.recordarme != undefined){
                        res.cookie('id', result.dataValues.id, {maxAge: 1000*60*60})
                    }
                    //console.log(req.session.user);
                    let id = req.session.user.id
                    return res.redirect(`/profile/id/${id}`)
                } else {
                    errors.mensaje = "la contraseña es incorrecta"
                    res.locals.errors = errors
                    return res.render('login')
                }     
            } else {
                errors.mensaje = "el mail no existe kumpi"
                res.locals.errors = errors
                return res.render('login')
            }
            
        }).catch((err) => {
            console.log(err);
            
        });
        
    },
    logout: function(req,res){
        res.clearCookie("id");
        req.session.user = undefined
        console.log("COOKIES", res.cookies)
        return res.render('login'); // redirect
       
    },
    
}

module.exports = profileController
