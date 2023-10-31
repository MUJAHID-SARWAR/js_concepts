class User {
    constructor(userName){
        this.userName = userName;
    }
    logMe(){
        console.log(`USERNAME is: ${this.userName}`);
    }
}

class Teacher extends User{

    constructor(userName, email, password){
        super(userName)
        this.email = email;
        this.password= password;
    }
    addCourses (){
        console.log (`A new course is launched ${this.userName}`);
    }
}

const Changes = new Teacher('Mujahid', 'moju@gb.com', '123')
Changes.logMe();

const moreChanges  = new User('MojuTas')

moreChanges.logMe()

console.log(Changes instanceof Teacher);