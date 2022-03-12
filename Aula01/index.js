const express=require('express');
const { reset } = require('nodemon');
const server = express();

server.use(express.json());

const alunos = [];

server.post("/aluno", (req, res) => {
    const { name } = req.body;
    alunos.push(name);

    return res.json(alunos);
});

server.put('/aluno/:index', (req, res) => {
    const {index} = req.params;
    const { name } = req.body;

    alunos[index] = name;

    return res.json(alunos);
})

server.delete('/aluno/:index', (req, res) => {
    const { index } = req.params;
    alunos.splice(index, 1);

    return res.json({ message: "aluno deletado"})
});

server.get('/aluno', (req, res) => {
    return res.json(alunos);
});



server.listen(3000);
