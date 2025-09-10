function calcMargemProduto(valor_venda, valor_custo){
    // eu vou fazer a atividade usando o conceito de markup, visto que nos meus testes usando
    // margem de lucro e os mesmos valores de exemplo no slide da prática, a porcentagem deu 16.6%
    // eu pesquisei e vi que o markup é na realidade a porcentagem do quanto você aumenta em cima do
    // valor de custo de um produto e vi que usando os mesmos valores com esse conceito a porcentagem foi de 20%
    lucro = valor_venda - valor_custo
    markup = (lucro / valor_custo) * 100
    return 'Markup do produto em %:', markup
}


// fiz com o valor fixo mas poderia ter gerado dois numeros aleatorios
// e passa-los como argumentos para a função
for (let i = 0; i <= 10; i++){
    console.log(calcMargemProduto(1800, 1500))
}
