const express = require("express");
const path = require("path");
const enableHotReload = require("./hot-reload");
const bodyParser = require("body-parser")
const app = express();
const bodyParser = require('body-parser');
const tarefaController = require("./controllers/tarefaController");

// Configuração do body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Configurando o body - parser
app.use(bodyParser.urlencoded({extended: false}))


// Configurações do seu app Express

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública

app.use(express.static(path.join(__dirname, "public")));
console.log("Static files path set to:", path.join(__dirname, "public"));

// Habilitar hot-reload

enableHotReload(app);

// Rotas
<<<<<<< HEAD
app.get("/" , exemploController.mostrarTelaDeExemplo)
app.post("/adicionar-produto" , produtoController.adicionarProduto);
app.get("/produto" , produtoController.mostrarTela);
=======

app.get("/" , tarefaController.exibirTarefas);
app.get("/adicionarTarefa" , tarefaController.adicionarNovaTarefa);
app.post('/adicionar', tarefaController.exibirNovaTarefa)
>>>>>>> e75d4ac4c57c402e0b9b7a7dfd40cddb1cc45bcf

// Inicie o servidor
const port = 3000;
app.listen(port, () => { console.log(`Servidor rodando em http://localhost:${port}`);});