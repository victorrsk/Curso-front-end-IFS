let maiorVeloCarro5 = 0, qntVeloAcima100radar2 = 0,
qntVeloAcima100Alagoas = 0;

let veloMediaCarros = [], matriz = [];


for (let linha = 0; linha < 10; linha++){
    matriz.push([])
    for (let coluna = 0; coluna < 5; coluna++){
        matriz[linha].push(Math.floor(Math.random() * 201))
    }
}

for (let carro = 0; carro < matriz.length; carro++){
    for (let radar = 0; radar < 5; radar++){
        if (carro == 4){
            maiorVeloCarro5 = Math.max(...matriz[radar])
        } else if (radar == 1 && matriz[carro][radar] >= 100){
            qntVeloAcima100radar2 += 1
        } else if (radar >= 3 && matriz[carro][radar] >= 100){
            qntVeloAcima100Alagoas += 1
        }
    }
}

for (carro of matriz){
    let velocidadeMedia = 0
    for (velocidade of carro)
        velocidadeMedia += velocidade
    veloMediaCarros.push([velocidadeMedia/5])
    velocidadeMedia = 0
}
console.log(matriz)
console.log('A maior velocidade do 5° carro:', maiorVeloCarro5)
console.log('A quantidade de velocidadesd acima de 100Km/h do radar 2:', qntVeloAcima100radar2)
console.log('A quantidade de velocidades acima de 100Km/h dos carros em Alagoas:', qntVeloAcima100Alagoas)
console.log(veloMediaCarros)