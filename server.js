const express = require('express')

const app = express()

const PORT = process.env.PORT || 4202

app.use(express.static(__dirname + '/dist/mesopotamia-angular/'))

app.get('/**', (req,res) => {
  res.sendFile(__dirname + '/dist/mesopotamia-angular/index.html')
})

app.listen(PORT, () => {
  console.log("Servidor Iniciou Na Porta: " + PORT)
})
