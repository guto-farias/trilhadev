const express = require("express");
const server = express();


server.get("/hello", (req, res) => {
    const {nome,idade} = req.query;

    return res.json({
        title: "hello world",
        message: `Ola ${nome}, de boas?`,
        idade: idade
    });
});

server.get("/hello/:nome", (req, res) => {
    const { nome } = req.params;

    return res.json({
        title:  "test params",
        message: `teste 2 pro ${nome}, de boas?`,
    });
});

server.listen(3000);






