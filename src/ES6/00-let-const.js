var name = 'Andrey';
name = 'Oscar';
console.log(name);

let nickName = 'andreycalder0n';
nickName = 'eltercercafe';
console.log(nickName);

// const cat = 'Vaquito';
// cat = 'Vacote';
// console.log(cat);

const fruits = () => {
    if(true) {
        var fruit1 = 'orange'; //function scope
        let fruit2 = 'banana'; //block scope
        const fruit3 = 'papaya'; //block
    }
    console.log(fruit1, fruit2, fruit3);
}

fruits();