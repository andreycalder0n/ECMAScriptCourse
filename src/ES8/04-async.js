const async = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 3000)
            : reject(new Error('Ups'));
    });
}

const another = async() => {
    const something = await async();
    console.log(something);
}

console.log('Before');
another();
console.log('After');