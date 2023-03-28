class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    #speak() {
        return 'Hi';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    get #userAge() {
        return this.age;
    }
    set #userAge(n) {
        this.age = n;
    }
}

const developer = new user('Jorge', 18);
console.log(developer.userAge);
console.log(developer.userAge = 3);