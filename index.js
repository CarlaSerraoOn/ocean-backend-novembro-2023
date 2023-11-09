const express = require('express')
const app = express()

// Registrar um Middleware
// Indica que todas as requisições podem receber
// Body em JSON. A partir disso, o express aplica
// um JSON

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/oi", function (req, res) {
  res.send("Olá, mundo!")
})

const lista = ["Harry Potter", "Hermione Granger", "Ronny Wesley"]

// Read All - [GET] /item
app.get("/item", function (req,res){
    res.send(lista)
})

// Read by id - [GET] /item/:id
app.get("/item/:id", function (req,res) {
// Pegamos o ID de rota e subtraimos 1 para ficar
// Equivalente ao índice da lista que começa em 0
    const id = req.params.id -1

// Acessamos o item na lista, usando o índice corrigido  
    const item = lista[id]

// Enviamos o intem como resposta do endpoint
    res.send(item)
})

// Creat - [POST] /item
app.post("/item", function (req,res) {

// Extraimos o nome do Body da requisição
    const item = req.body.nome

// Adicionamos o item recebido na lista    
    lista.push(item)

// Exibimos uma mensagem de sucesso
    res.send("Item adicionado com o sucesso!")
})

// Update - [PUT] /item/:id
app.put("/item/:id", function (req,res){
//Obtemos o ID do paramentro de rota e fazemos a correcao do item
    const id = req.params.id -1

    const novoItem = req.body.nome

    lista[id] = novoItem

    res.send("Item atualizado com sucesso!")
})



app.listen(3000);