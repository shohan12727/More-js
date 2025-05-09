const user = {
    userName: 'shohan',
    price: 999,
    welComeMessage: function () {
        console.log(`${this.userName} , welcome to website`);
        console.log(this);


    }
}

console.log(user.welComeMessage());
user.userName= 'sam';
user.welComeMessage();

console.log(this);

function chai() {
    console.log(this);

}
chai();

const chai = function () {
    let userName = 'Shohan'
    console.log(this.userName)
}

console.log(chai);




const car = {
    name:'BMV',
    price:2000,
    made:'germany',
    details : function () {
        console.log(this.made);
    }
}
car.details()
car.made= 'Japan';
car.details();


const addTwo = (num1,num2) => {
    console.log(num1+num2);
    
}

addTwo(22,32);


















