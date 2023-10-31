function User (email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
           return this._email.toUpperCase()

        },
        set: function(key){
            this._email = key
        }
    })
   Object.defineProperty(this, 'password', {
    get: function(){
        return `${this._password}mojules`
    },
    set: function(value){
        this._password = value
    }
   }) 
}

const myBio = new User ('mujahid@fb.com', 87654)
console.log(myBio.email)
console.log(myBio.password)