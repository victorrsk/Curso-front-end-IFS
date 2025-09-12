function criarMatriz(nLinhas, nColunas){
    matriz = Array()
    for (let linha = 0; linha < nLinhas; linha++){
        matriz[linha] = []
        for (let coluna = 0; coluna < nColunas; coluna++){
            matriz[linha][coluna] = Math.floor(Math.random()*51)
        }
    }
    return matriz
}


teste = [1, 2, 3, 4, 5, 6]

for (elemento of teste){
    console.log(elemento)
}

