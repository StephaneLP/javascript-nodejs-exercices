const express = require('express')
const app = express()
const port = 3000

app.get('/monchemin', (req, res) => {
  res.send('Hello World!')
  console.log("Requête get dans mon appli !")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})