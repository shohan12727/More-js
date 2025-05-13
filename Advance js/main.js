// global scope

let x = 1;

const parentFunction = () => {
  let myValue = 2;
  console.log(x);
  console.log(myValue);

  const childFunction = () => {
    console.log((x += 10));
    console.log((myValue += 5));
  };

  return childFunction;
};

const result = parentFunction();

console.log(result);

result () ;

result () ;

// IIFE (immediately invoked Function Expression)



const privateCounter = (() => {
   let count =0 ;
   console.log(`initial value: ${count}`);
   return () => {count += 1; console.log(count);}
   
}) () ;

privateCounter() ;
privateCounter() ;
privateCounter() ;
privateCounter() ;
privateCounter() ;
privateCounter() ;



(function () {
  let name = "Shohan";
  console.log("Hello, " + name);
})();


( function () {
  let name = 'Shohan';
  console.log("Ashraful Islam " + name);
}
)();












( () => {
  let food = '🍕'
  console.log('Food I like most is: ' + food);
}

) ();











