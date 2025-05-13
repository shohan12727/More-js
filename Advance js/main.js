// global scope  

let x = 1 ;

const parentFunction = () =>{
  let myValue = 2 ;
  console.log(x);
  console.log(myValue);

   const childFunction = () => {
    console.log(x += 10);
    console.log(myValue += 5);
    
   }
  
   childFunction();
}

parentFunction();
