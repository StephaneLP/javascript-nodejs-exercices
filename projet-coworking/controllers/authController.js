const bcrypt = require("bcrypt")
const {UserModel} = require('../db/sequelize');
const { Op, UniqueConstraintError, ValidationError } = require("sequelize")
const jwt = require("jsonwebtoken")

exports.login = (req, res) => {
    const user = req.body.username
    const pwd = req.body.password

    if(!user || !pwd) {
        const msg = "Veuillez renseigner un login et un mot de passe !"
        return res.status(400).json({message: msg})
    }

    UserModel.findOne({
        where: {username: user}
    })
    .then((el) => {
        if(!el) {
            const msg = "L'utilisateur n'existe pas !"
            return res.status(400).json({message: msg})
        }

        bcrypt.compare(pwd,el.password)
            .then(isValid => {
                if(!isValid) {
                    const msg = "Le mot de passe est erroné !"
                    return res.status(400).json({message: msg})
                }

                // Json Web Token
                console.log(el)
                const token = jwt.sign({
                    data: el.id
                }, "mon_secret", { expiresIn: "1h"})

                const msg = "L'utilisateur a été connecté avec succès"
                return res.json({msg, el, token})
            })
    })
    .catch((error) => {
        const msg = "L'utilisateur n'a pas pu se connecter"
        res.json({ message: msg, Erreur: error})
    })
}



