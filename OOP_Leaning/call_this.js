function setUserName (username){
     // complex DB calls 
     this.username = username
     console.log('username is called now')

}

function createUser (username, email, password){
    setUserName.call(this, username)

    this.email = email
    this.password = password
}
const mujahid = new createUser("Rana Mujahid", 'mujahid@meta.com', 12345)
console.log(mujahid)
