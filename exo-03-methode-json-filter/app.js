const express = require('express')
const app = express()
const port = 3000

const coworkings = require('./mock-coworkings')

// GET AVEC PARAMETRE
// -> Renvoyer les coworkings au format json dont superficie >= limit
// Limit est le paramètre indiqué dans l'url
// Si le paramètre n'est pas enregistré la surface est ramenée à 0

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
