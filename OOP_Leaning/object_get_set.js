const User = {
    _email : 'moju@ai.com',
    _password: 'hjhcj',

    get email (){
        return this._email.toUpperCase()
    },
    set email(key){
        this._email = key
    }
}
const biodata = Object.create(User)
console.log(biodata.email)

