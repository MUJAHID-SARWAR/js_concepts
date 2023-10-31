const  descriptor= Object.getOwnPropertyDescriptor (Math, "PI")
console.log(descriptor);

console.log(Math.PI)
 Math.PI = 5
console.log(Math.PI);

const myData = {
    name: "Mujahid",
    SrName: "Rana",
    isAvailable: true ,

    whichCompany: function(){
        console.log('In one of the best Company in the world')
    }
}

console.log(Object.getOwnPropertyDescriptor(myData, 'name'))

Object.defineProperty(myData, 'name', {
    writeable: false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(myData, 'name'))

for (const [key, value] of Object.entries(myData)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`)
    }
}
