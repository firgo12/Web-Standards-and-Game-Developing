// pegando id
const getId1 = document.getElementById('herois');
console.log(getId1);

const getId2 = document.querySelector('#heroi3');
console.log(getId2);

//pegar class
const getClass1 = document.getElementsByClassName('heroi');
console.log(getClass1);
console.log(getClass1[3]);

const getClass2 = document.querySelectorAll('.nome');
console.log(getClass2);
console.log(getClass2[3].textContent);
getClass2[3].textContent = 'Super Beli';

//pegar tag
const getTag1 = document.getElementsByTagName('th');
console.log(getTag1);

const getTag2 = document.querySelectorAll('td');
console.log(getTag2);
console.log(getTag2[10].innerHTML);