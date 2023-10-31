// A javascript has a prototyipal behaviour means it never give up too soon
 
function multiBy5 (num) {
    // this.num = num
     return num * 5
}
multiBy5.power = 2

console.log(multiBy5(5));
console.log(multiBy5.power);
console.log(multiBy5.prototype);

function UserCreate (userName, score){
   this.userName = userName;
   this.score = score;
 }

 UserCreate.prototype.increment = function (){
   this.score++ 
 }

 UserCreate.prototype.printMe = function(){
    console.log(`Score is: ${this.score}`);
 }

 const Mujahid = new UserCreate("Mujahid", 300)
 const Sarwar = UserCreate("Sarwar", 3300)
 Mujahid.printMe()

 