const user = {
    userName: "Mujahid Sarwar",
    semester: 7,
    BSCS: true,
    getUserDetails: function(){
        // console.log('Getting calls from Database')
        // console.log(`Username: ${this.userName}`)

        // console.log(this);
    }
}
// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

// keyword (new) is actually Constructor Function
// whenever a keyword (new) is used it produce empty object
// A new object is created by using (new) keyword
// A contructor function is called due to (new) keyword
// this keyword is injected in whatever you passed the arguments
// 


function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.grettings = function(){
        console.log(`Welcome: ${this.userName}`)
    }

    return this
}
const user1 = new User("Mujahid Sarwar", 13, true);
const user2 =new User("Rana Moju", 15,true)
// constructor is refrence by itself 
console.log(user1.constructor);
// console.log(user2);