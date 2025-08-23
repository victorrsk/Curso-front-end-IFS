var altura, peso, perc_maior_180, perc_menor_80kg,
    menor_altura, maior_peso, qnt_maior_180, qnt_menor_80kg,
    contador

peso_limite = 120
// todas essas variáveis começam com zero 
qnt_maior_180 = qnt_menor_80kg = menor_altura = peso = contador = maior_peso = 0


altura = Math.random() * 201
peso = Math.floor(Math.random() * 120)
menor_altura = altura

while (peso != peso_limite){

    altura = Math.random() * 201
    peso = Math.floor(Math.random() * 121)
    // percentual de pessoas maiores 1.80 e menos que 80kg
    if (altura > 180){
        qnt_maior_180++
    }
    if (peso < 80){
        qnt_menor_80kg++
    }
    // menor altura e maior peso
    if (altura < menor_altura){
        menor_altura = altura
    }
    if (peso > maior_peso){
        maior_peso = peso
    }

    contador++
}

perc_menor_80kg = Math.floor((qnt_menor_80kg * 100) / contador)
perc_maior_180 = Math.floor((qnt_maior_180 * 100) / contador)

console.log('Percentual de pessoas maiores que 1.80:', perc_maior_180, '%')
console.log('Percentual de pessoas com peso abaixo de 80kg', perc_menor_80kg, '%')
console.log('Menor altura:', menor_altura)
console.log('Maior peso:', maior_peso)

