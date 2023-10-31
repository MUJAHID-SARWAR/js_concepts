ES6

class User {
    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abyz`
    }
    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

const newUser = new User('Mujahid', 'moju@meta.com', "124")
console.log(newUser.encryptPassword());
console.log(newUser.changeUserName())

// Behind the Scenes if class syntax is not available 

function User(userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abyz`
}
User.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}
const myName = new User ('Mujahid', 'moju@meta.com', "124")
console.log(myName.encryptPassword());
console.log(myName.changeUserName())