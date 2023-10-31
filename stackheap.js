// Stack (Primitive) , Heap (Non-Primitive)

let myName = "Mujahid Sarwar";

let anotherName = myName;
anotherName = 'chai aur code'

console.log(myName);
console.log(anotherName);

let userOne = {
    email: 'user@gmail.com',
    id: 'user@Ms'
}

let userTwo = userOne

userTwo.email = 'mujahids@gmail.com'

console.log(userOne.email)
console.log(userTwo.email)

