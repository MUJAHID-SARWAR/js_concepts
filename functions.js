function myName (){
    console.log('M')
    console.log('u')
    console.log('j')
    console.log('a')
    console.log('h')
    console.log('i')
    console.log('d')
}

// myName();

function addTwoNum (num1 , num2){

//    let result = num1 + num2
//    return result 

   return num1 + num2
 }
const result  =addTwoNum(7 , null);

// console.log("Result: " ,result);

// function loginUserMsg (userName = "Mujahid" ){
//     if(!userName){
//             console.log('Please enter a userName')
//             return
//     }
//     return  `${userName} just logged in`
// }
//  console.log( loginUserMsg());

function calculateCartPrice (...num1){
    return num1
}
// console.log(calculateCartPrice(200 ,400 ,500, 8000))
 

let user = {
    name : "Mujahid",
    prices: 199
}
function handleObjects (anyObject){
    console.log(`UserName is ${anyObject.name} and price is ${anyObject.price}`)
}
// handleObjects (user)

handleObjects ({
    name : 'Mujahid',
    price : 300
})

const newArray = [40 , 70 , 50 ,30]

function returnArray (getArray){
    return getArray [2]

}

console.log(returnArray(newArray))