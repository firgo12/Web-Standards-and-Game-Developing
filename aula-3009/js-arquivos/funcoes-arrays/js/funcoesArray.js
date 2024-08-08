calcular1(6,123);
calcular1(16,33);
calcular1(26,3);
calcular1(36,100);
calcular1(1,1);

//Dentro do paranteses coloca os parâmetros, LEMBRE-SE por boa prática coloca somente 2 ou 3 no máximo! Chorando... Um 4.
function calcular1(n1, n2){ //Uma função void, não retorna nada, ele apenas EXECUTA, NÓS que precisamos falar para retornar
    let resultado = n1 + n2;
    document.querySelector('#exemplo1').textContent += `${resultado} `;
}

//exemplo 02
const primeiroNumero = parseInt(Math.random()*100);
const segundoNumero = parseInt(Math.random()*100);

console.log(primeiroNumero, segundoNumero);

function calcular2(pn,sn){
    //let resultado = pn * sn; //Esse resultado, semente existe NESSE CONTEXTO, o let é em bloquinho
    return pn * sn; //RETURN somente retorna 1 coisa, mas podemos retornar um Array, objeto e etc.
}

const resultado = calcular2(primeiroNumero, segundoNumero); //Argumento é aquele que envia para o parâmetros, lembre-se que nessa linha é ARGUMENTO e não PARÂMETRO
document.querySelector('#exemplo2').textContent = resultado;

//Array

const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles'];
document.querySelector('#array1').textContent = pessoas;

//inserir no último índice
pessoas.push('Dark Vader'); 
document.querySelector('#array2').textContent = pessoas;

//excluir o último índice. ELE EXCLUI MESMOOOOOOOO!!!!!!!!
const pessoasExcluidas = [];
pessoasExcluidas.push(pessoas.pop()); 
document.querySelector('#array3').textContent = pessoasExcluidas;


//inserir no início do Array - REORDENAR O ARRAY!
pessoas.unshift('Mestre Yoda');
document.querySelector('#array4').textContent = pessoas;

//excluir o primeiro índice - REORDENAR O ARRAY!
pessoasExcluidas.push(pessoas.shift());
document.querySelector('#array5').textContent = pessoasExcluidas;

//excluir em qualquer parte do array - QUANTOS QUISER!
pessoas.splice(2,2); //No Argumento você precisa falar AONDE vai começãr excluir e depois Quantos vai excluir
document.querySelector('#array6').textContent = pessoas;

//inserir em qualquer parte do array - quantos quiser
pessoas.splice(2,0, 'Ele', 'Nós', 123, 999, ...pessoasExcluidas); //Com três pontos ele destrutura uma array!
document.querySelector('#array7').textContent = pessoas;

//criando elemento HTML e chamando class CSS via JS
pessoas.forEach(pessoa => { //lambida function (=>)

    //criar o elemento p
    const paragrafo = document.createElement('p'); //Fala o que quer criar

    //inserir o nome da pessoa no parágrafo
    paragrafo.textContent = pessoa;

    //inserir classes do BS no parágrafo
    paragrafo.classList.add('bg-danger', 'text-light');

    //inserir o parágrafo criado na DIV
    document.querySelector('#array8').appendChild(paragrafo);
})