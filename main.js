// Classe abstrata
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    exibirInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

  // Classe herdeira 1
class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    exibirInfo() {
        super.exibirInfo();
        console.log(`Portas: ${this.portas}`);
    }
}

  // Classe herdeira 2
    class Moto extends Veiculo {
        constructor(marca, modelo, cilindradas) {
            super(marca, modelo);
            this.cilindradas = cilindradas;
    }

    exibirInfo() {
        super.exibirInfo();
        console.log(`Cilindradas: ${this.cilindradas}cc`);
    }
}

  // Instâncias de objetos
const carro1 = new Carro("Toyota", "Corolla", 4);
const moto1 = new Moto("Honda", "CG 160", 160);
const carro2 = new Carro("Ford", "Ka", 2);

  // Testando
carro1.exibirInfo();
moto1.exibirInfo();
carro2.exibirInfo();