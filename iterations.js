// for

for (let i = 0; i <= 7; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the number")
    }
    // console.log(element);
    
}
// console.log(element)

for (let i = 1; i <= 10; i++) {

    // console.log(`Outer loop value is ${i}`)

        for (let j = 1; j <= 10; j++) {

            // console.log(`Inner loop value is ${i} and inner loop ${i}`)
            // console.log(i + '*' + j + ' = ' + i*j)
        }
    
}
let myArray = ['Robin Hood' , 'superman' , 'batman']
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(myArray)
    // console.log(element)
}

// Break and Continue

// for (let index = 1; index <= 15; index++) { 
//   if (index == 5) {
//     console.log('index 5 is detected')
//     break;
//   }
//     console.log(`value of i is ${index}`)
// }

for (let index = 1; index <= 15; index++) {
  if (index == 8) {
    console.log('8 number is detected')
    continue;
  }
    console.log(`Value of i is ${index}`);
}