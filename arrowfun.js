const user = {
    username : 'Mujahid',
    price : 200,

    welcomeMessage: function(){
        console.log((`${this.username} , welcome to the website`))
        // console.log(this)
    }

}
// user.welcomeMessage()
// user.username = 'Rana'
// user.welcomeMessage()

// console.log(this)

// function code (){
//     let username = "Mujahid"
//     console.log(this.username)
// }
// code()

// const coding = function (){
//     let username = "Mujahid"
//         console.log(this.username)
// }

// coding()
const coding = () => {
    let username = "Mujahid"
        console.log(this)
}

// coding()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// const addTwo = (num1 , num2) =>  num1 + num2

// const addTwo = (num1 , num2) =>  (num1 + num2)

const addTwo = (num1 , num2) =>  ({username: 'Mujahid'})


console.log(addTwo(5 , 8))

