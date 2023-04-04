const express = require('express')
const app = express()
const port = 3000

const coworkings = require('./mock-coworkings')

// GET SANS PARAMETRE :
// -> Renvoyer tous les coworkings au format json
// Le tableau coworkings est converti au format json avec la méthode res.json()

app.get('/api/coworking', (req, res) => {
  res.json(coworkings)  
  console.log("Requête get dans mon appli !")
})

// GET AVEC PARAMETRE :
// -> Retourner un espace corerspondant à l'id passé en paramère sous forme json
// Fonction Find() utilisée pour trouver l'espace de coworking à partir du paramètre

app.get('/api/coworking/:id', (req, res) => {
  let resultat = "Absent de la liste"

  let myCoworking = coworkings.find(el => el.id === parseInt(req.params.id))
  if(myCoworking != undefined ) resultat = myCoworking

  res.json(resultat)
  console.log(req.params.id)
})

app.listen(port, () => {
  console.log(`Example app listening on port : ${port}`)
})