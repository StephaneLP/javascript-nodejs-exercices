const coworkings = require('../db/mock-coworkings');
const {CoworkingModel} = require('../db/sequelize');

exports.createCoworking = (req, res) => {
    const newCoworking = req.body;

    CoworkingModel.create({
        name: newCoworking.name,
        price: newCoworking.price,
        address: newCoworking.address,
        picture: newCoworking.picture,
        superficy: newCoworking.superficy,
        capacity: newCoworking.capacity,
    })

    console.log('Un coworking a bien été ajouté.')
    res.json({ newCoworking })
}

exports.findAllCoworkings = (req, res) => {
    const search = req.query.search || ""
    const limit = req.query.limit || 0

    const { Op } = require("sequelize");
    CoworkingModel.findAll({
        where: {
            [Op.and]: [
                {name: {[Op.like]: `%${search}%`}},
                {superficy: {[Op.gte]: limit}}
            ]
        }
        })
        .then((el) => {
            const msg = `La liste des coworkings a bien été retournée.`
            res.json({ message: msg, data: el })
        })
        .catch(error => {console.error(`Erreur findAllCoworkings  ${error}`)})  
}

exports.findCoworkingByPk = (req, res) => {
    const id = req.params.id
    const msg = `L'espace de coworking n°${id} a bien été retourné.`

    CoworkingModel.findByPk(id)
        .then((el) => {
            res.json(el != null ? { data: el } : "Le coworking n'existe pas")
        })
        .catch(() => res.json("Erreur findCoworkingByPk"))
}

exports.updateCoworking = (req, res) => {
    const id = req.params.id

    CoworkingModel.update(req.body,{
        where: {id: id}
    })
    .then((el) => {
        const msg = `L'espace de coworking n°${id} a bien été modifié.`
        res.json({ message: msg, data: el })
    })
}

exports.deleteCoworking = (req, res) => {
    const id = req.params.id

    return CoworkingModel.destroy({
        where: {id: id}
    })
    .then((el) => {
        const msg = `L'espace de coworking n°${id} a bien été supprimé.`
        res.json({ message: msg, data: el })
    })
}
