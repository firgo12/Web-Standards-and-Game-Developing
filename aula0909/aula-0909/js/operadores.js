// sortear valores - Math.random() sortear um valor de 0 e 1
let numberSorte = parseInt(Math.random()*100);
console.log(numberSorte);

document.querySelector('#oi').textContent = numberSorte;


console.log(`${numberSorte} + 10 = ${numberSorte+10}`);
console.log(`${numberSorte} - 10 = ${numberSorte-10}`);
console.log(`${numberSorte} / 10 = ${numberSorte/10}`);
console.log(`${numberSorte} % 3 = ${numberSorte%3}`);
console.log(`${numberSorte} ** 3 = ${numberSorte**3}`);