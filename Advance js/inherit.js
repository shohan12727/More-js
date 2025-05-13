const person = {
  alive : true 
}

const cat = {
   human : false
}

cat.__proto__ = person ;
console.log(cat.human);
console.log(cat.alive);

const student1 = {
  name : 'Shohan'
}
const student2 = {
  Name: 'Raka'
}
student2.__proto__ = student1 ;

console.log(student2.name);
console.log(student2.Name);


const dell = {
  quality: 'good'
}
 const hp = {
  quantity : 20 
 }

 dell.__proto__ = hp ;
 console.log(dell.quality);
 console.log(dell.quantity);
 
 // perfect example of inheritance..................