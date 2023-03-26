// Enhaced object literals

function newUser(user, age, country, eId) {
    return {
        user,
        age,
        country,
        id: eId,
    }
}

console.log(newUser('Juan', 22, 'CO', 2));