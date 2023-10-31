const userEmail = []

if (userEmail) {

    console.log('Got user email')
    
} else{
    console.log('No email is recieved')
}

// Falsy Values

// false , 0 , r0 , BigInt , ""  0n , null , undefined , Nan

// Tuthy Values

// "0" ,'false' , " " , {} , [] , function(){}

// if (userEmail.length === 0 ) {
//     console.log("Array is empty")    
// }

const emptyObject = {}

// if (Object.keys(emptyObject).length ===0 ) {
//     console.log("Object  is Empty")
// }

// Nullish Coalescing Operator (??): null , undefined 

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1= undefined ??  15
val1 = null ?? 10 ?? 20

console.log(val1);

// Ternary operator

// condition ? true : false

const iceTeaPrice = 200
iceTeaPrice <= 150 ? console.log("less than 80") : console.log("more than 80");
