const coding = ['js' , 'java' , 'cpp' , 'Ruby' , 'kotlin']

coding.forEach(function (val) {
    // console.log(val);
})

coding.forEach( (item) =>{
    // console.log(item)
} )

function printMe (item) {
    console.log(item)
}

// coding.forEach(printMe);


coding.forEach ( (item , index , array) =>{

    // console.log(item , index , array)
})

let myCoding = [
    {
        languageName : 'javScript',
        languageFile : 'js'
    },
    {
        languageName : 'flutter',
        languageFile : 'Dart'
    },
    {
        languageName : 'java',
        languageFile : 'springBoot'
    }
]
myCoding.forEach ((item) =>{
  console.log(item.languageName);
})