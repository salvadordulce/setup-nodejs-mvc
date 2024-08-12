const tarefaModel = require('../models/tarefaModel');

function exibirTarefas(request, response) {
    const tarefas = tarefaModel.listarTarefas();
    console.log('Tarefas:', tarefas);
    response.render('index');
}

function adicionarNovaTarefa(request, response) {
    response.render('adicionarTarefa');
}

function exibirNovaTarefa(request, response) {
    console.log('Chegou na adcionarTarefa')
    console.log(request.body);
    const titulo = request.body.titulo;
    const descricao = request.body.descricao;
    tarefaModel.adicionarTarefa(titulo, descricao);
    response.redirect('/')
}

module.exports = {
    exibirTarefas,
    adicionarNovaTarefa,
    exibirNovaTarefa
}