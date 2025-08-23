var tempo_empresa, idade_funcionario, salario_base, novo_salario,
    num_funcionarios, soma_novos_salarios, media;

num_funcionarios = 5
soma_novos_salarios = 0

for(let i = 0; i < num_funcionarios; i++){

    idade_funcionario = Math.floor(Math.random() * 91)
    salario_base = Math.floor(Math.random() * 50001)
    tempo_empresa = Math.floor(Math.random() * 41)

    if (idade_funcionario < 50 && tempo_empresa <= 10){
        novo_salario = salario_base + (salario_base * (10 / 100))
        console.log('O', i+1,'° funcionário tem', tempo_empresa, 'anos de empresa,', idade_funcionario,'anos e salário de R$', salario_base,'Novo salário: R$', novo_salario,'Aumento de 10%')
        soma_novos_salarios = soma_novos_salarios + novo_salario
    }
    else if (idade_funcionario < 50 && tempo_empresa > 10){
        novo_salario = salario_base + (salario_base * (20 / 100))
        console.log('O', i+1,'° funcionário tem', tempo_empresa, 'anos de empresa,', idade_funcionario,'anos e salário de R$', salario_base,'Novo salário: R$', novo_salario,'Aumento de 20%')
        soma_novos_salarios = soma_novos_salarios + novo_salario
    }
    else if (idade_funcionario >= 50 && tempo_empresa <= 10){
        novo_salario = salario_base + (salario_base * (30 / 100))
        console.log('O', i+1,'° funcionário tem', tempo_empresa, 'anos de empresa,', idade_funcionario,'anos e salário de R$', salario_base,'Novo salário: R$', novo_salario,'Aumento de 30%')
        soma_novos_salarios = soma_novos_salarios + novo_salario
    }
    else if (idade_funcionario >= 50 && tempo_empresa > 10){
        novo_salario = salario_base + (salario_base * (40 / 100))
        console.log('O', i+1,'° funcionário tem', tempo_empresa, 'anos de empresa,', idade_funcionario,'anos e salário de R$', salario_base,'Novo salário: R$', novo_salario,'Aumento de 40%')
        soma_novos_salarios = soma_novos_salarios + novo_salario
    }
}

media = soma_novos_salarios / num_funcionarios

console.log()
console.log('Soma total dos novos salários:', soma_novos_salarios)
console.log('Média dos novos salários dos funcionários:', media)
