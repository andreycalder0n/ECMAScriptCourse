const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hola xd');
        } else {
            reject('F, pa');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));
