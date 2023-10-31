class User {
    constructor(email, password){
        this.email = email;
        this.password  = password
    }

      get email (){
        return this._email.toUpperCase()
    }
    set email(key){
         this._email = key
    }

    get password(){
       return `${this._password}mujahid`
    }
    set password(key){
        this._password = key
    }
}

const mujahid = new User('mujahid@meta.com', 'ereert')
console.log(mujahid.password);
console.log(mujahid.email);
