// ALUNO: JOÃO VICTOR RODRIGUES


// classe pai
class Transporte {
    // atributos
    constructor (placa, anoFabr, capacidade) {
        this.placa = placa
        this.anoFabr = anoFabr
        this.capacidade = capacidade
    }
}

class Carro extends Transporte {
    
    constructor(placa, anoFabr, capacidade, cambio, freioDeMao, temEstepe, tipo){
        super(placa, anoFabr, capacidade)
        // atriutos somente de Carro
        this.cambio = cambio
        this.freioDeMao = freioDeMao
        this.temEstepe = temEstepe
        this.tipo = tipo // finalidade do veiculo <- trilha, corrida, trabalho
    }
    // método da classe Carro
    usarEstepe() {
        console.log('Usando estepe temporariamente')
        this.temEstepe = false
        return
    }
}

class Moto extends Transporte {

    constructor (placa, anoFabr, capacidade, tipo, qntCilindradas) {
        super(placa, anoFabr, capacidade)
        // atributos somente de Moto
        this.pezinhoAbaixado = false
        this.tipo = tipo
        this.qntCilindradas = qntCilindradas
    }

    estacionar() {
        console.log('Abaixando pezinho da moto')
        this.pezinhoAbaixado = true
        return
    }

}

class Aviao extends Transporte {

    constructor (placa, anoFabr, capacidade, qntMotores, tipoViagem) {
        super(placa, anoFabr, capacidade)
        this.qntMotores = qntMotores
        this.tipoViagem = tipoViagem // viagens internacionais, intercontinentais, regionais
        this.pilotoAutomatico = false
    }

    ativarPilotoAut() {
        console.log('Piloto automatico ativado')
        this.pilotoAutomatico = true
        return
    }
}

class Barco extends Transporte {

    constructor (placa, anoFabr, capacidade, tipo, qnt_quartos, qnt_tripulantes){
        super(placa, anoFabr, capacidade)
        this.tipo = tipo // iate, navio de carga, lancha, barco de pesca
        this.qnt_quartos = qnt_quartos
        this.qnt_tripulantes = qnt_tripulantes
    }

    ancorar() {
        console.log('Embarcação ancorada')
        return
    }
}


// testes

const objCarro = new Carro (
    placa = 'QRT2K23',
    anoFabr = 2010,
    capacidade = 5,
    cambio = 'Manual',
    freioDeMao = true,
    temEstepe = true,
    tipo = 'Trabalho'
)

const objMoto = new Moto(
    placa = 'JVB3J40',
    anoFabr = 2017,
    capacidade = 2,
    tipo = 'Trilha',
    qntCilindradas = 230
)

const objAviao = new Aviao(
    placa = 'PR-GTG', // seria a matricula do avião
    anoFabr = 2000,
    capacidade = 220,
    qntMotores = 2,
    tipoViagem = 'regional'
)

const objBarco = new Barco(
    placa = '321-001245-9',
    anoFabr = 2010,
    capacidade = 50,
    tipo = 'lancha',
    qnt_quartos = 2,
    qnt_tripulantes = 5,
)
