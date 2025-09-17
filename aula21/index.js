function meuEscopo () {
const form = document.querySelector('.form')
const resultado = document.querySelector('.resultado')
const pessoas = []
function recebeEventoForm (evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome').value;
    const sobrenome = form.querySelector('.sobrenome').value;
    const peso = form.querySelector('.peso').value;
    const altura = form.querySelector('.altura').value;
    pessoas.push({nome, sobrenome, peso, altura});
    console.log(pessoas)
    
    resultado.innerHTML += `<p>Nome: ${nome}<br> Sobrenome: ${sobrenome}<br> Peso: ${peso}<br> Altura: ${altura}</p>`;
}
form.addEventListener('submit',recebeEventoForm);

}
meuEscopo ();
/*form.onsubmit = function (evento) {
    
    alert(1);
    console.log('Foi enviado!');
};*/
/*let contador = 1
function recebeEventoForm (evento){
    evento.preventDefault ();
    console.log(`Form não foi enviado${contador}`);
    contador++;*/


