async function* anotheGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(5);
}

const other = anotheGenerator();

other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));

console.log('Hi');

async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['Juan', 'Pepe', 'Julia']);
console.log('After');