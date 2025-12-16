// aqui eu gero um numero aleatório entre 1000 e 9999
// depois eu converto ele para string
numero = String(Math.floor(Math.random() * ((9999 - 1000) + 1) + 1000))
// crio o vetor vazio
vetor = []
// aqui eu criei um loop for que percorre os indices de número que agora é tratado como string
for (let i = 0; i < numero.length; i++){
    // dentro do for eu dou um parseInt no 'numero' que o for está iterando
    // para converter de string para int
    vetor.push(parseInt(numero[i]))
}

console.log(numero)
console.log('O número tem', numero[0],
     'milhares\n', numero[1],
     'centenas,', numero[2],
     'dezenas\n e',numero[3],
     'unidades')
