const express = require('express')
const app = express()
const port = 3000

const coworkings = require('./mock-coworkings')

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

//   // coworkings.map((el) => {
//   //   if(el.id == req.params.id) {
//   //     msg = "Nom : " + el.name
//   //   }
//   // }) 

//   res.send(msg)
//   console.log(req.params.id)
// })


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


// Renvoyer les coworkings dont superficie >= 500
app.get('/api/coworking', (req, res) => {
  const limit = req.query.limit || 0
  
  const resultat = coworkings.filter((el) => {
    return(
      el.superficy >= limit
    )
  })

  res.json(resultat)  
  console.log("Requête get dans mon appli !")
})




app.listen(port, () => {
  console.log(`Example app listening on port : ${port}`)
})