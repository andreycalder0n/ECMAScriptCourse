function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Andrey', 'Pepe', 'Andrea', 'Julian']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);