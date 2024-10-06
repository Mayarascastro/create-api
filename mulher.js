const express =  require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Mayara Castro',
        imagem: 'https://www.linkedin.com/in/mayara-castro-5541ba9b',
        minibio: 'Desenvolvedora'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}


app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)