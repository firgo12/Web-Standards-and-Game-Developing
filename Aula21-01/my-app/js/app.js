//pegar o tbody no HTML e passar para o MARAVILHOSO Mundo JS
const tbody = document.querySelector('tbody');
console.log(tbody); //Recomendado dar um console log para ver se de fato pegou e vê se tem algum erro 

//pegar o form
//atribuir um escutador de eventos (submit) = .addEventListener('submit');
//Criar uma função (ela irá receber o evento) - cancelar o evento padrão
//O parâmetro da função irá receber o evento (submit)

document.querySelector('form').addEventListener('submit',function(e){

    e.preventDefault();
    //alert("OI, o evento foi disparado!"); - Disparando o evento e atualizando a pag (e.preventDefault();)

    //criar um array que irá receber os campos
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ]
    console.log(campos);
    //criar a tr
    const tr = document.createElement('tr'); //createElement - CRIA QUALQUER elemento HTML!!!

    //criar um FOR para percorrer o Array para cada índice do Array: = campos.forEach(campo =>
    //criar uma td;
    //pegar o conteúdo digitado no campo e passar para a td;
    //víncular a td na tr

    campos.forEach(campo => { //FOREACH - PERCORRE TODO O ARRAY
        //console.log(campo.value);//Recuperamos um value (SEMPRE IRÁ VIR COMO STRING!!!!) que o usuario digitou na página
        const td = document.createElement('td');//<td></td> (Criou VAZIU a tag td)
        td.textContent = campo.value; //<td>cont</td>
        tr.appendChild(td); //O tr (linha) irá Receber o cont da td (coluna)
    });

    //for(let i=0;i<campos.length;i++){
        //const td = document.createElement('td');//<td></td>
        //td.textContent = campo[i].value; //<td>cont</td>
        //tr.appendChild(td); //O tr irá Receber o cont da td
    //}


    //colocar no tbody a linha que foi criada com os seus respectivos td's

    tbody.appendChild(tr);

    //Limpar o form - reset()
    this.reset(); //ESSE FORM da um reset depois do submit!!!!

});

