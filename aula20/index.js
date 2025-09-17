/*
Primitivos (imutáveis) - string, number, boolean, undefined
null (bigint, symbol) - valor
referência (mutável) - array, object, function - passados por referência
*/
let a = [1]
let b = a //cópia de a

a.push(4);
a.push(3)
a.push(2)
console.log(a, b)
