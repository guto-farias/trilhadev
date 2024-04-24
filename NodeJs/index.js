const express = require("express");
const server = express();

server.use(express.json());

//banco de dados em forma de array rs
let customers = [
  { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
  { id: 2, name: "Google", site: "http://google.com" },
  { id: 3, name: "UOL", site: "http://uol.com.br" }
];

//listagem de dados
server.get("/customers", (req, res) => {
  return res.json(customers);
});

//criação de dados
server.post("/customers", (req, res) => { //req : requisição ; res : resposta
    const { name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;

    const newCustomer = { id, name, site };
    customers.push(newCustomer);

    console.log(customers);
    return res.status(201).json(newCustomer);
});

//listagem requisitando por id
server.get("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 404;
  
    return res.status(status).json(customer);
  });  

//atualização de dados
server.put("/customers/:id", (req, res)=> {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;

    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if(index >= 0){
        customers[index] = { id: parseInt(id), name, site }
    }

    return res.status(status).json(customers[index]); //return no json pra dar sensação de resposta
});

//exclusão de dados
server.delete("/customers/:id", ( req, res ) =>{
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id); //findIndex testa cada elemento do customers e retorna quando a condição for satisfeita
    const status = index >= 0 ? 200 : 404;

    if(index >= 0){
        customers.splice(index, 1);
    }

    return res.status(status).json(); //return no json vazio pos n faz sentido mostrar o deletado
});

server.listen(3000);