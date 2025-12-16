// Aluno: João Victor Rodrigues Silva
//       ATIVIDADES

var nota1, nota2, nota3, nota4, media, soma_peso_notas;

// aqui as variáveis recebem o valor aleatorio ate 10
nota1 = Math.random() * 11;
nota2 = Math.random() * 11;
nota3 = Math.random() * 11;
nota4 = Math.random() * 11;

// aqui as notas são formatadas com 2 casas decimais
nota1 = nota1.toFixed(2)
nota2 = nota2.toFixed(2)
nota3 = nota3.toFixed(2)
nota4 = nota4.toFixed(2)

// cada nota está sendo multiplicdada pelo seu respectivo peso e depois é feita a soma do peso das notas
media = (nota1 * 2) + (nota2 * 2) + (nota3 * 4) + (nota4 * 5);
soma_peso_notas = 2+2+4+5

// saida de dados
console.log('Primeira nota:', nota1,'\nSegunda nota:', nota2, '\nTerceira nota:', nota3, '\nQuarta nota:', nota4);
console.log('Média ponderada das notas:', media);