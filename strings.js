let name = 'Mujahid';

const repo = 3

// console.log(name + repo )

console.log(`hello my name is ${name} and my repo count is ${repo}`)

const gameName = new String ('Mujahid-MS');

// console.log(gameName[4])
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(5))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString =gameName.slice(-7 , 5)

console.log(anotherString)

const anotherStringOne = '     Muajhid      '
console.log(anotherStringOne);
console.log(anotherStringOne.trim());

console.log(gameName.blink());
console.log(gameName.bold());