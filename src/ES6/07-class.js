class User {};

const newUser =  new User();

class Users {
    //methods
    greeting() {
        return 'Hi';
    }
};

const person = new Users();
console.log(person.greeting());

const otherPerson = new Users();
console.log(otherPerson.greeting());

//Constructor

class user {
    // Constructor
    constructor() {
        console.log('New user');
    }
    greeting() {
        return 'Hi';
    }
}

const david = new user();

// this

class user {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Hi, dude'
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const Ana = new user('Ana');
console.log(Ana.greeting());

//set get

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return 'Hi';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    get userAge() {
        return this.age;
    }
    set userAge(n) {
        this.age = n;
    }
}

const developer = new user('Jorge', 18);
console.log(developer.userAge);
console.log(developer.userAge = 3);