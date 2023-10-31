class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`UserName is: ${this.username}`)
    }
  static  createId(){
        return `1234`
    }
}

const mujahid = new user ('Mojee')
console.log(mujahid.createId())

class Teacher extends user {
    constructor(username,email){
        super (username)
        this.email =  email
    }
}

const iPhone =new Teacher ('Iphone', 'I@phone.com')
console.log(iPhone.createId())