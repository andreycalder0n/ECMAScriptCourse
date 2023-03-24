// arrays

let fruits = ['Banana', 'Papaya'];
let [a, b] = fruits;
console.log(a, fruits[1]);

//objects destructuring

let user = { username: 'Andrey', age: 43};
let { username, age} = user;
console.log(username, age);

//spread operator

let person = { name: 'Andrey', age: 23};
let country = 'CO';


let data = { id: 1, ...person, country};
console.log(data);

//rest

function sum(num, ... values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 'perreo', 2, 3, 4);