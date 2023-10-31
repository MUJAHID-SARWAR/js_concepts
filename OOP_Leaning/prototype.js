let myName = "MUjahid       "
let company = 'World best      '

console.log(myName.trueLength);

let myHero = ['hulk' ,'spidy']

let heroPower = {
    hulk: 'Hammer',
    spidy: 'sling',

    getSpidyPower: function(){
        // console.log(`Spidy power is ${this.spidy}`)
    }
}
Object.prototype.mujahid = function(){
    // console.log(`mujahid is present in all objects`);
}

Array.prototype.heyMujahid = function(){
    // console.log(`Mujahid says hello`)
}


// heroPower.mujahid()
// myHero.mujahid()
// myHero.heyMujahid()
// heroPower.heyMujahid()

// inheritance 

const User = {
    name: "Mujahid Sarwar",
    email: 'mujahidSarwar@metagmail.com'
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime : false,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = 'MujahidRana     '
String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
"Mujahid".trueLength()
'OnlyChai'.trueLength()