// Pegar o botão/btn
const btnCalcular = document.querySelector("#btnCalcular");

// atribuir o clique a uma função
// É possível criar uma função anônima, ou seja, não precisa falar o nome da função!
//ATUALMENTE, utiliza o ARROW FUNCTION, que tem a mesma função que o function 
btnCalcular.addEventListener("click", function(){
    
//Pegando os HERÓIS, todos eles têm a class heroi
//LEMBRA!! SÓ VAI APARECER NO LOG SE VOC~E CLICAR!!!!!!!
const herois = document.querySelectorAll(".heroi");
console.log(herois);


for(let i=0;i<herois.length;i++){

        //Pegando a força
        let forca = Number(herois[i].querySelector(".forca").textContent);

         //Pegando a agilidade
        let agilidade = Number(herois[i].querySelector(".agilidade").textContent);

        //Pegando a velocidade
        let velocidade = Number(herois[i].querySelector(".velocidade").textContent);
        
        //Calculando XP
        let xpFinal = (forca + velocidade + agilidade)/3;

        //exibindo na página
        herois[i].querySelector(".xp").textContent = xpFinal.toFixed(1);
        //toFixed, fixa quantas casas decimais depois da vírgula!!!

        if(xpFinal < 70){
            herois[i].classList.add("bg-danger", "text-light", "lead");
        }

}




});