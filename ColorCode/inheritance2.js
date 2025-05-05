class person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    talk () {
        return `Hi i am ${this.name} and what's your name?`;
    }
    introduce () {
        return `I am ${this.name} and  i am ${this.age} years old`;
    }
}

const me = new person ("pal sagar",25);
console.log(me.introduce());
