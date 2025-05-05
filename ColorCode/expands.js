class human {
    talk () {
        return 'talking'
    }
}

class superHuman extends human {
    fly () {
        return 'flying'
    }
}

const shohan = new superHuman () ;

console.log(shohan.fly());
console.log(shohan.talk());
    
