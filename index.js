const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 
const connection = require("./database/database");

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });

//View engine
app.set('view engine', 'ejs');
//Arquivos estáticos
app.use(express.static('public'));
//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    res.send("Formulário recebido!");
});

app.listen(8080, () => {
    console.log("App rodando.")
});