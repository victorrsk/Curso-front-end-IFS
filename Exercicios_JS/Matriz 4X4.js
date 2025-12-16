matriz = Array()

for (l = 0; l < 4; l++){
    matriz[l] = []
    for (j = 0; j < 4; j++){
        matriz[l][j] =  Math.floor((Math.random()*101))
    }
}
console.log(matriz)

// 00 01 02 03
// 10 11 12 13
// 20 21 22 23
// 30 31 32 33
elementos_pares = 0

for (l = 0; l < 4; l++){
    for (j = 0; j < 4; j++){
        if (l+j > matriz.length - 1 && matriz[l][j] % 2 == 0){
            elementos_pares += matriz[l][j]
        }
    }
}

console.log(elementos_pares)