const express = require("express");
const path = require("path");
const enableHotReload = require("./hot-reload");
const app = express();

const exemploController = require("./controllers/exemplo");
const produtoController = require("./controllers/produto");

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

app.post("/adicionar-produto" , produtoController.adicionarProduto);
app.get("/produto" , produtoController.mostrarTela);

// Inicie o servidor
const port = 3000;
app.listen(port, () => { console.log(`Servidor rodando em http://localhost:${port}`);});