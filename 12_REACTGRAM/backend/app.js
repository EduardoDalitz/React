require("dotenv").config()

const express = require("express");
const path = require("path");
const cors = require("cors");

//Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web.

//chama do arquivo .env
const port = process.env.PORT;

const app = express();

// config JSON and form data response.
//middlewares do express
app.use(express.json());//habilitar json
app.use(express.urlencoded({extended: false})); //aceitar form data


//solve cors - resolver problema de quando a gnt executa as requisições pelo mesmo dominio

app.use(cors({credentials: true, origin: "http://localhost:3000"}))

//upload directory

app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

//DB connection
require("./config/db.js")

//trazer as rotas
const router = require("./routes/Router.js");

app.use(router);

//iniciar aplicação
app.listen(port, ()=> {
    console.log(`App rodando na porta ${port}`);
});