import express, { request, Request , response, Response} from 'express';

const server = express();

//Faz a entrada na aplicação
server.get('/', (request: Request, response: Response) => {
    return response.json({mensagem:'Bem vindo a nossa Dio API'})
})

server.get('/usuarios',(request: Request, response: Response) => {
    return response.json([
        {
            nome: 'joao'
        },
        {
            nome: 'maria'
        },
        {
            nome: 'marcelo'
        },
    ])
})

server.listen(5000,() =>{
    console.log('servidor on na porta 5000 http://localhost:5000')
})

//CRUD
// criar um usuario  create
// editar um usuario read
// selecionar um usuario update
// deleter um usuario delete

// GET - Ler
// PUT/ PATCH -Atualizar recursos
// UPDATE - atualizar
// DELETE - deletar




