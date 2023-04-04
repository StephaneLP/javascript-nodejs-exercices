const express = require('express')
const app = express()
const port = 3000

const coworkings = require('./mock-coworkings')

////////////////////////////////////////////////
// EXO 1
////////////////////////////////////////////////

// app.get('/api/coworking', (req, res) => {
//   let msg = ""

//   msg = "<h1>All Coworkings !</h1><br><br>"
//   msg += `Nombre d'éléments : ${coworkings.length}<br><br>`

//   coworkings.map((el) => {
//       msg += "nom : " + el.name +"<br>"
//     })

//   res.send(msg)  
//   console.log("Requête get dans mon appli !")
// })

// app.get('/api/coworking/:id', (req, res) => {
//   let msg = "Absent de la liste"

//   let titre = coworkings.find(el => el.id === parseInt(req.params.id))
//   if(titre != undefined ) msg = "Nom : " + titre.name

//   coworkings.map((el) => {
//     if(el.id == req.params.id) {
//       msg = "Nom : " + el.name
//     }
//   }) 

//   res.send(msg)
//   console.log(req.params.id)
// })

////////////////////////////////////////////////
// EXO 2
////////////////////////////////////////////////

// // Retourner un resultat sous forme json
// app.get('/api/coworking/:id', (req, res) => {
//   let resultat = "Absent de la liste"

//   let myCoworking = coworkings.find(el => el.id === parseInt(req.params.id))
//   if(myCoworking != undefined ) resultat = myCoworking

//   res.json(resultat)
//   console.log(req.params.id)
// })


// // Renvoyer tous les coworkings au format json
// app.get('/api/coworking', (req, res) => {
//   res.json(coworkings)  
//   console.log("Requête get dans mon appli !")
// })

////////////////////////////////////////////////
// EXO 3
////////////////////////////////////////////////

// // Renvoyer les coworkings dont superficie >= 500
// app.get('/api/coworking', (req, res) => {
//   const limit = req.query.limit || 0
  
//   const resultat = coworkings.filter((el) => {
//     return(
//       el.superficy >= limit
//     )
//   })

//   res.json(resultat)  
//   console.log("Requête get dans mon appli !")
// })

////////////////////////////////////////////////
// EXO 3 BIS
////////////////////////////////////////////////

// // Renvoyer les coworkings dont capacité >= parametre
// app.get('/api/coworking', (req, res) => {
//   const capacite = req.query.capacite || 0
  
//   const resultat = coworkings.filter((el) => el.capacity > Number(capacite))

//   res.json(resultat)  
//   console.log("Requête get dans mon appli !")
// })

////////////////////////////////////////////////
// EXO 3 TER
////////////////////////////////////////////////

// // Renvoyer le coworking dont id passé en paramètre
// app.get('/api/coworking/:id', (req, res) => {
//   let resultat = coworkings.find((el) => el.id === Number(req.params.id))
//   resultat = resultat || "Pas d'enregistrement !"

//   res.json(resultat)  
//   console.log("Requête get dans mon appli !")
// })

////////////////////////////////////////////////
// EXO 4
////////////////////////////////////////////////

// // Renvoyer le coworking dont id passé en paramètre
// app.get('/api/coworking/:id', (req, res) => {
//   const msg = `L'esapce de coworking n°${req.params.id} a bien été trouvé`
//   let resultat = coworkings.find((el) => el.id === Number(req.params.id))

//   resultat ? res.json({message:msg, data:resultat}) : res.json({message:msg})
//   console.log("Requête get dans mon appli !")
// })

////////////////////////////////////////////////
// EXO 5
////////////////////////////////////////////////

// const morgan = require("morgan")
// app.use(morgan("dev"))

// const serveFavicon = require("serve-favicon")
// app.use(serveFavicon(__dirname + "/favicon.png"))

// // Renvoyer le coworking dont id passé en paramètre
// app.get('/api/coworking/:id', (req, res) => {
//   const msg = `L'esapce de coworking n°${req.params.id} a bien été trouvé`
//   let resultat = coworkings.find((el) => el.id === Number(req.params.id))

//   resultat ? res.json({message:msg, data:resultat}) : res.json({message:msg})
//   console.log("Requête get dans mon appli !")
// })

////////////////////////////////////////////////
// EXO 6
////////////////////////////////////////////////

const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.get('/api/coworking', (req, res) => {
  res.json(coworkings)  
  console.log("Requête get dans mon appli !")
})

app.post('/api/coworking', (req, res) => {
  const l = coworkings.length
  const lastId = coworkings[l-1].id

  // Récupère corps requête
  let newCoworkings = req.body
  newCoworkings.id = lastId + 1
  // Envoi le corps de la requête dans la variable coworkings
  coworkings.push(newCoworkings)

  const msg = "Un coworking a bien été ajouté."

  res.json({data: coworkings, message: msg})
  console.log("Requête post dans mon appli !")
})



app.listen(port, () => {
  console.log(`Example app listening on port : ${port}`)
})