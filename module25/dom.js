const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);

for (const li of liCollection){
    console.log(li.innerHTML)
}

const dom = document.getElementsByTagName('h1')     
console.log(dom[0].innerText); 