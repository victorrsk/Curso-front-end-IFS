var preco_produto, novo_preco, juros, parcelas;

preco_produto = 20;

// Número de parcelas aleatório entre 1 e 5
parcelas = Math.floor(Math.random() * 5) + 1;

// toFixed serve para formatar duas casas decimais
if (parcelas <= 2) {
    juros = 5 / 100;
    novo_preco = preco_produto + (preco_produto * juros);
    console.log('O produto de R$', preco_produto.toFixed(2), ', parcelado em', parcelas, 'vezes com juros de 5% agora vale R$', novo_preco.toFixed(2));
} else {
    juros = 10 / 100;
    novo_preco = preco_produto + (preco_produto * juros);
    console.log('O produto de R$', preco_produto.toFixed(2), ', parcelado em', parcelas, 'vezes com juros de 10% agora vale R$', novo_preco.toFixed(2));
}
