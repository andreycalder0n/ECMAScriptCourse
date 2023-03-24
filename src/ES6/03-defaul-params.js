function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 23;
    var counntry = country || 'Colombia';

    console.log(name, age, counntry);
}

newUser();
newUser('David', 16, 'Mexico');

function newAdmin(name = 'Oscar', age = 24, country = 'Argentina') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Pepe', 89, 'Uruguay');