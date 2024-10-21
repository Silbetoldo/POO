// Classe Pessoa - Abstração e encapsulamento
class Pessoa {
    #idade; // Atributo privado (encapsulamento)

    constructor(nome, idade) {
        this.nome = nome;
        this.#idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.#idade} anos.`;
    }

    getIdade() {
        return this.#idade;
    }
}

// Classe Funcionario que herda de Pessoa - Herança
class Funcionario extends Pessoa {
    constructor(nome, idade, cargo, salario) {
        super(nome, idade); // Chama o construtor da classe Pessoa
        this.cargo = cargo;
        this.salario = salario;
    }

    // Polimorfismo: Sobrescrevendo o método apresentar
    apresentar() {
        return `${super.apresentar()} Eu sou ${this.cargo} e meu salário é R$${this.salario}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
}

// Função para exibir dados no HTML
function mostrarDados() {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Limpa o conteúdo

    // Instanciação de objetos
    const pessoa1 = new Pessoa('João', 25);
    const pessoa2 = new Pessoa('Silvana', 40);
    const funcionario1 = new Funcionario('Maria', 30, 'Desenvolvedora', 5000);
    const funcionario2 = new Funcionario('Pedro', 35, 'Designer', 4000);

    // Exibindo os objetos
    const pessoas = [pessoa1,pessoa2, funcionario1, funcionario2];
    pessoas.forEach(p => {
        const div = document.createElement('div');
        div.textContent = p.apresentar();
        output.appendChild(div);
    });
}

// Evento do botão para mostrar dados
document.getElementById('showPeople').addEventListener('click', mostrarDados);
