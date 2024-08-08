// console do navegador
// Case sensitive
// ponto e vírgula não obrigatório
console.log('Olá eu sou o console');
console.log('Serei muito usado por você');

//variáveis => NÂO TEM TIPO!!!
//JS FAZ TIPAGEM AUTOMÁTICA BASEADA NO CONTEÚDO
//TRÊS PALAVRAS RESERVADAS PARA CRIAR VARIÁVEIS (VAMOS USAR APENAS 2)

// Nome de variável é camelCase e caseSensitive
let userName = 'Guilherme';
let userEmail = 'guilherme.mendes.cunha14@gmail.com';
let userId = 12345;
let userLogin = true;
let userAge;
let userPay = null; //Foi declado que esse VARIÁVEL será nula

console.log(userName, userEmail,userId,userLogin,userPay);
console.log(userAge); //Vai vir "undefined"

// typeof - retorna o tipo atribuído, até mesmo o undifined (que é um TIPO também!)
console.log(userName,typeof userName);
console.log(userEmail,typeof userEmail);
console.log(userId,typeof userId);
console.log(userPay,typeof userPay);
console.log(userAge,typeof userAge);

//É possível mudar o tipo da variável. Havendo uma correção de tipo, exemplo:
// userLogin = 'asjfgwebgejwgbe';
console.log(userLogin,typeof userLogin);
//Lembre-se! Você só pode mudar o tipo da variável, não PODE declarar novamente


for(let i =0; i<=10;i++){ //O valor final do i, será 11!!! Pois perguntará:"11 é menor ou igual a 10? False"
    console.log(i);
}
let i =0;
//LET é um escopo de um bloco específico, ou seja, existe aquela variável somente naquele bloco. Se declarada fora, irá retornar como undifined/não declarada. 
//VAR é um escopo de um bloco global, ou seja, existe aquela variável no escopo inteiro!
console.log(i);

// const DATANASCIMENTO = "02/12/1970";
// console.log(DATANASCIMENTO);
// DATANASCIMENTO = "01/11/1986"; //Irá dar erro, pois é uma CONSTANTE!

// NÃO FAZER ISSO!!!! NUNCA!!!! JAMAIS
// console.log('Usuário = '+ userName +' Email = ' + userEmail);

// TEMPLATE STRING ou TEMPLATE LITERAL
// Iniciar e terminar com crase ``
// Placeholder => ${} = recebem: variáveis - Métodos - Funções - tags - css - qualquer coisa:
console.log(`Usuário: ${userName} Email: ${userEmail} ${10+10}`);