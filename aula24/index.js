/*
0 - 11 bom dia
12 - 17 boa tarde
18 - 23 boa noite
*/
// if pode ser usado sozinho
// sempre que uso a palavra else, preciso de um if antes
//Posso ter vários else ifs na checagem
//só se pode ter um ELSE na checagem


const hora = 25;

if (hora >= 0 && hora <= 11){
    console.log('Bom Dia!')
} else if (hora >= 12 && hora <= 17){
    console.log('Boa Tarde!')
} else if (hora >= 18 && hora <= 23){
    console.log('Boa Noite!')
} else {
    console.log('Olá!')
}
