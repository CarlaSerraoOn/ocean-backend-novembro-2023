const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/oi", function (req, res) {
  res.send("Olá, mundo!")
})

const lista = ["Harry Potter", "Hermione Granger", "Ronny Wesley"]

//Read All - [GET] /item
app.get("/item", function (req,res){
    res.send(lista)
})

//Read by id - [GET] /item/:id
app.get("/item/:id", function (req,res) {
//Pegamos o ID de rota e subtraimos 1 para ficar
//Equivalente ao índice da lista que começa em 0
    const id = req.params.id -1

//acessamos o item na lista, usando o índice corrigido  
    const item = lista[id]

//Enviamos o intem como resposta do endpoint
    res.send(item)
})





app.listen(3000 ,() =>
    console.log("Servidor rodando em http://localhost:3000")
);