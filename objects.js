// Singleton

// object literals
const mySym = Symbol('key1')
const JSUSer = {
    name: 'Mujahid',
    "full Name" : "Mujahid Sarwar",
    mySym: "myKey1",
    age: 18,
    location: "okara",
    email: 'ms@gmail.com',
    isLoggedIn: "false",
    lastLoginDays: ['Monday' , 'Saturday']

}

// console.log(JSUSer.email);
// console.log(JSUSer['email']);
// console.log(JSUSer["full Name"]);
// console.log( JSUSer.mySym);

JSUSer.email =  'moju@metagmail.com'
// Object.freeze = (JSUSer)
JSUSer.email = 'moju@microsoftgmail.com'

// console.log(JSUSer)

JSUSer.greeting = function (){
    console.log('hello JS user');
}
JSUSer.greetingTwo = function (){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JSUSer.greeting());
console.log(JSUSer.greetingTwo());