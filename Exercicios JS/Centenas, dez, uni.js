var numero, centenas, dezenas;

// numero inicia com 325
numero = 325;
console.log('O numero é:', numero)

// feito o calculo das centenas
centenas = Math.floor(numero / 100);

// aqui numero subtrai de seu valor o resulado das centenas multiplicadas por 100 e armazena somente 25
numero -= centenas * 100

// o mesmo conceito serve para dezenas
dezenas = Math.floor(numero / 10);
numero -= dezenas * 10

// usei a variável numero para representar as unidades visto que o valor que numero possui ao final do programa representa somente as unidades restantes
console.log('Ele tem', centenas, 'centenas,', dezenas, 'dezenas e', numero, 'unidades.')



