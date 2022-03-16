const express=require('express');
const { reset } = require('nodemon');
const server = express();

server.use(express.json());

const produto = '';

server.post("/produto", (req, res) => {
    const { name } = req.body;
    produto.push(name);

    return res.json(produto);
});

server.put('/produto/:index', (req, res) => {
    const {index} = req.params;
    const { name } = req.body;

    produto[index] = name;

    return res.json(produto);
})

server.delete('/produto/:index', (req, res) => {
    const { index } = req.params;
    produto.splice(index, 1);

    return res.json({ message: "produto deletado"})
});

server.get('/produto', (req, res) => {
    return res.json(produto);
});



server.listen(3000);
