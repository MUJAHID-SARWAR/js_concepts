// if

// const isLoggedIn = true
// const weatherForcast = 41

// if (weatherForcast === 40) {

//     console.log('weatherForcast is less than 50');
//     } else {

//         console.log('weatherForcast is greater than 50');
//     }
//   console.log("Executed")
// < , > , <= , >= , == , != , ===(strict checking) , !==

// const score = 200

// if (score > 100) {
//     let power = "Fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`);

const balance = 1000;

// if (balance > 1000) console.log("This statement is also executed"),
// console.log( `Obviously the corect balance is: ${balance} `); // Don't Do This , This is immature code

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 760) {
//   console.log("less than 760");
// } else if (balance < 950) {
//   console.log("less than 950");
// } else {
//   console.log("less than 1200");
// }

let userLoggedIn = true
const debitCard = true
const googleLogged = false
const emailLogged = true

if (userLoggedIn && debitCard && 2==2) {
    console.log('Allow to buy Courses')
}

if (googleLogged || emailLogged) {
    console.log('User loged In');
}
