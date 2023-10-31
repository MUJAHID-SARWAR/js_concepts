var gamma = 3000

let alpha = 400

if (true){

    let alpha = 10

    const beta = 20

    gamma = 30

    // console.log("Inner: " , alpha)

}

// console.log(alpha);
// console.log(beta);
// console.log(gamma);

function one () {
    const username = 'Mujahid'

    function two(){

        const website = 'Youtube'
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()

if(true) {
    const username = "Mujahid"
    if(username === "Mujahid"){
        const website = " Youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

console.log(addOne(9))
function addOne (num){
    return num + 1
}


console.log(addTwo(7)) // Cannot access before initilization 
const addTwo = function(num){
    return num + 2
}
