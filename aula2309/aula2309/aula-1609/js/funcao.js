//pegar o botão
const btnCalcular = document.querySelector("#btnCalcular")
//Criei uma CONST no js e peguei o ID do html!
console.log(btnCalcular);

// atribuindo o ESCUTADOR de eventos ao botão para que quando clicado chame a  função!
btnCalcular.addEventListener("click", mensagem1);
//Quando o usuário CLICKAR que é acionado pelo o Evento "addEventListener", chamar  a função "mensagem1"!



//function (função), permite criar um método para realizar uma atividade
//Parâmetro, como fala, fica dentro do paranteses é executa todos os parâmetros para se realizar aquela função
//mensagem1();
//mensagem2();

// criar uma função
function mensagem1(){
    alert("Oi fui chamado por uma função");
}

function mensagem2(){
    alert("oi");
}

//Vale salientar que o function tem uma "prioridade"(A grosso modo, ele carrega antes) maior do que declarar a function antes!
//onclick="CHAMA A FUNÇÃO()". LEMBRA DE CHAMAR NO HTML!!!

