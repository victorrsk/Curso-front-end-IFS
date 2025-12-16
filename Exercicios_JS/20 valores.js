var qnt_numeros, soma, numeros_abaixo_50, numeros_acima_70,
    perc_acima_70, maior_valor

qnt_numeros = 20
soma = 0
numeros_abaixo_50 = 0
numeros_acima_70 = 0
maior_valor = 0


for(let i = 0; i < qnt_numeros; i++){

    numero = Math.floor(Math.random() * 101)
    soma = soma + numero

    if (numero > maior_valor){
        maior_valor = numero
    }

    console.log(i+1, '° numero:', numero)
    if (numero < 50){
        numeros_abaixo_50++
    }
    if (numero > 70){
        numeros_acima_70++
    }

}

perc_acima_70 = (numeros_acima_70 * 100) / qnt_numeros

console.log('Soma dos numeros:', soma)
console.log('Média dos numeros:', soma / qnt_numeros)
console.log('Quantidade numeros abaixo de 50:', numeros_abaixo_50)
console.log('Percentual de numeros acima de 70:', perc_acima_70, '%')
console.log('Maior valor:', maior_valor)