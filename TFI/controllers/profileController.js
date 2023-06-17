const db = require("../database/models");
const data = require("../db/data")
const profile = db.Usuario;
const bcrypt = require('bcryptjs');

const profileController = {
    show: function (req, res) {
        let filtro = {
            include: [{ association: 'productos' }],
            include: [{
                all: true,
                nested: true
              }],
        }
        idUser = req.params.id
        profile.findByPk(idUser, filtro)
            .then((result) => {
                return res.render('profile', { usuario: result })
            }).catch((err) => {
                console.log(err);
            });
    },
    register: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect("/index");
        } else {
            return res.render("register")
        }
    },
    store: function (req, res) {
        let data = req.body
        errors = {};

        db.Usuario.findOne({
            where: [{ email: data.email }]

        }).then((result) => {
            if (data.email == "") {
                errors.mensaje = 'Debes ingresar tu email'
                res.locals.errors = errors
                return res.render('register')
            } else if (result != null) {
                errors.mensaje = "el mail ingresado ya existe"
                res.locals.errors = errors
                return res.render("register")
            } else if (data.clave == "") {
                errors.mensaje = 'Ingresa una contraseña'
                res.locals.errors = errors
                return res.render('register')
            } else if (data.clave.length < 3) {
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
    profileEdit: function (req, res) {
        let id = req.params.id
        let filtro = {
            include: [{
                all: true,
                nested: true
            }]
        };

        profile.findByPk(id, filtro)
            .then((result) => {
                if (req.session.user && req.session.user.id == id) {
                    return res.render("profile-edit", { usuario: result });
                } else {
                    return res.render("profile", { usuario: result });
                }
            }).catch((err) => {
                console.log("Este es el error de mierda" + err)
            });
    },
    storeProfile: function (req, res) {
        let info = req.body
        let id = req.params.id
        filtro = { where: [{ id: id }] }
        //
        if (info.email != "") {
            if (info.usuario != "") {
                if (info.dni != "") {
                    if (info.fecha_perfil != "") {
                        if (info.fecha_nacimiento != ""){
                            if (info.clave != "") {
                                info.clave = bcrypt.hashSync(info.clave, 10)
                                profile.update(info, filtro)
                                .then((result) => {
                                    req.session.user.usuario = info.usuario
                                    return res.redirect("/profile/id/" + id)
                                }).catch((err) => {
                                    console.log(err)
                                });                        
                            } else {
                                profile.update({
                                    usuario: req.body.usuario,
                                    email: req.body.email,
                                    dni: req.body.dni,
                                    fecha_nacimiento: req.body.fecha_nacimiento,
                                    foto_perfil: req.body.foto_perfil
                                }, filtro)
                                .then((result) => {
                                    req.session.user.usuario = info.usuario
                                    return res.redirect("/profile/id/" + id)
                                }).catch((err) => {
                                    console.log(err)
                                });

                            }
                        }
                        }
                    }
            }
        }

    },
    login: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect("/index");
        } else {
            return res.render("login")
        }
    },
    storeLogin: function (req, res) {
        let emailInsertado = req.body.email
        let claveInsertada = req.body.clave

        let filtrado = {
            where: [{ email: emailInsertado }]
        }

        errors = {}

        db.Usuario.findOne(filtrado)
            .then((result) => {
                if (result != null) {
                    let claveCorrecta = bcrypt.compareSync(claveInsertada, result.clave)
                    if (claveCorrecta) {
                        req.session.user = result.dataValues
                        if (req.body.recordarme != undefined) {
                            res.cookie('id', result.dataValues.id, { maxAge: 1000 * 60 * 60 })
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
    logout: function (req, res) {
        res.clearCookie("id");
        req.session.user = undefined
        return res.render('login'); // redirect

    },

}

module.exports = profileController
