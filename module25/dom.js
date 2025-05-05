const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);

for (const li of liCollection){
    console.log(li.innerHTML)
}

const dom = document.getElementsByTagName('h1')     
console.log(dom[0].innerText); 

const countryname = document.getElementById('country').innerText('uganda');
console.log(countryname);

document.getElementById('country').innerText = 'uganda';
const countryname = 'uganda';
console.log(countryname);


document.getElementById('country').innerText = 'Uganda';
const countryname = 'uganda'
console.log(countryname);

const animalName = document.getElementsByClassName('animals-lists').innerText;
for (const element of animalName){
    console.log(element);   
}
const contriesList = document.getElementsByClassName('contries-list').innerText;
for (const element of contriesList){
    console.log(element);
}



Get the animal list items
const animalItems = document.querySelectorAll('.animals-lists ul li');
for (const element of animalItems) {
    console.log(element.innerText);
}

Get the country list items
const countryItems = document.querySelectorAll('.contries-list ul li');
for (const element of countryItems) {
    console.log(element.innerText);
}

const animalsItems = document.querySelectorAll('.animals-lists ul li');
for (const element of animalsItems){
    console.log(element.innerText)
}

const countryLists = document.querySelectorAll('.contries-list ul li')
for (const element of countryLists){
    console.log(element.innerText);    
}

const  districtItems =  document.querySelectorAll('.district-lists ul li');
for(const element of districtItems) {
    console.log(element.innerText);
}

const fruitsLists = document.querySelectorAll('.fruits-list ul li');
for (const element of fruitsLists ){
    console.log(element.innerText);
}

