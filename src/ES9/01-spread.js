const user = { username: 'eltercercafe', age: 23, country: 'CO' };
const {username, ...values } = user;
console.log(username);
console.log(values);