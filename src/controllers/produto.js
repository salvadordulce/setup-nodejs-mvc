function mostrarTela(request , response){
    response.render('produto');
}

function adicionarProduto(request , response){
    console.log('Entrou na função de adicionar produto');
    //console.log(request);
    response.redirect('/produto');
}

module.exports = {
    mostrarTela,
    adicionarProduto
}