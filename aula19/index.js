// [] array {} object
/*const pessoa1 = {
    nome:'luiz',
    sobrenome: 'Miranda',
    idade: 25
};
const pessoa2 = {
    nome:'maria',
    sobrenome: 'oliveira',
    idade: 55
};*/
/*const criaPessoa = (nome, sobrenome, idade) => {
    return{ nome, sobrenome, idade
        /*nome: nome,
        sobrenome: sobrenome,
        idade:idade
    }
}
const pessoa1 = criaPessoa('Gustavo', 'Ferreira', 29)
const pessoa2 = criaPessoa('Fernando', 'henrique', 22)
console.log(pessoa1.nome, pessoa2.idade)*/
const pessoa1 = {
    nome:'luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala() {
        console.log(`A minha idade atual é ${this.idade}.`)
    }, 
    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();