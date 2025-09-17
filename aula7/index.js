const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;
let resultaTriplicado = resultado * 3;
resultaTriplicado = resultaTriplicado +5;
console.log(resultaTriplicado)
// mais + menos - multiplicado * dividir / 
//Dentro de aspas String = Texto,Fora das aspas Number = Numero
console.log (typeof primeiroNumero)
console.log(primeiroNumero + segundoNumero);
// Gustavo Ferreira tem 29, pesa 69kg tem 1.6 de altura e seu IMC é de 
const primeiroNome = 'Gustavo'
const segundoNome = 'Ferreira'
const idade = 29;
const peso = 69;
const altura = 1.6;
const imc = (peso / (altura * altura))
let anoNascimento = 2025 - idade;
console.log(primeiroNome, segundoNome,'tem', idade,'pesa', peso,`tem ${1.6} de altura e seu IMC é de ${imc} nasceu em ${anoNascimento}`);