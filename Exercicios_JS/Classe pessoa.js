
// 2 - Questão

// classe pai
class Pessoa {

    constructor (nome, endereco, telefone) {
        this.nome = nome
        this.endereco = endereco
        this.telefone = telefone
    }

    getNome() {
        return this.nome
    }
    getTelefone() {
        return this.telefone
    }
}

class Fornecedor extends Pessoa {

    constructor (nome, endereco, telefone, valorCredito, valorDivida) {
        super(nome, endereco, telefone)
        this.valorCredito = valorCredito
        this.valorDivida = valorDivida
    }
    obterSaldo() {
        let diferenca = this.valorCredito - this.valorDivida
        return diferenca
    }
}

class Empregrado extends Pessoa {

    constructor (nome, endereco, telefone, codigoSetor, salarioBase, imposto) {
        super(nome, endereco, telefone)
        this.codigoSetor = codigoSetor
        this.salarioBase = salarioBase
        this.imposto = imposto
    }
    calcularSalario() { 
        let salario = this.salarioBase - (this.salarioBase * (this.imposto / 100))
        return salario
    }
}

const empregado1 = new Empregrado(
    'João',
    'R José',
    '79 0123-9823',
    121234,
    2340,
    10
)

console.log(empregado1.calcularSalario())

const fornecedor1 = new Fornecedor(
    'Caio',
    'R Silvieri',
    '21-9902-7654',
    4000,
    2500
)

console.log(fornecedor1.obterSaldo())