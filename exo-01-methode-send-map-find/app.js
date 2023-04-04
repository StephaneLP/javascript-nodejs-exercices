const express = require('express')
const app = express()
const port = 3000

const coworkings = require('./mock-coworkings')

// GET SANS PARAMETRE :
// -> Boucle map pour récupérer le nom de tous les espaces de coworking

app.get('/api/coworking', (req, res) => {
  let resultat = ""

  resultat = "<h1>All Coworkings !</h1><br><br>"
  resultat += `Nombre d'éléments : ${coworkings.length}<br><br>`

  coworkings.map((el) => {
    resultat += "nom : " + el.name +"<br>"
    })

  res.send(resultat)  
  console.log("Requête get dans mon appli !")
})

// GET AVEC PARAMETRE :
// -> Récupérer l'espace de coworking correspondant à l'id passé en paramètre dans l'url
// Fonction find avec le paramètre récupéré à partir de l'url placé dans req.params.id
// ParseInt pour convertir un string en number

app.get('/api/coworking/:id', (req, res) => {
  let resultat = "Absent de la liste"

  let titre = coworkings.find(el => el.id === parseInt(req.params.id))
  if(titre != undefined ) resultat = "Nom : " + titre.name

  res.send(resultat)
  console.log(req.params.id)
})

app.listen(port, () => {
  console.log(`Example app listening on port : ${port}`)
})