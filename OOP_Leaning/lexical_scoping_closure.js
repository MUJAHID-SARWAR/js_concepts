// function init (){
//     let name = 'Pakistan';
//     function displayName(){
//         console.log(name)
//     }
//     displayName();
// }
// init();

function outer (){
    let name = 'Mujahid'
    // console.log(myCode); // chote barron se manng saktee hann baree nhii
    function inner(){
        // let myCode = 'abc12'
        // console.log(`The inner function name is ${name}`)
    }
    function middle (){
        // console.log(`Please add  my name in this middle function using lexical scoping: ${name}`)
        // console.log(myCode) // kabhi kabhi bhaion kii apas mein nhi bntii  inner or middle bhai hann outer in ka baap or dada haii 
    }
    inner();
    
    middle();
}
outer()
// console.log('Too Outer' ,name);

function makeFunc (){
    let name = 'Rana Jee';
    function displayName (){
        console.log(name);
    }
    return displayName;
}
 let myFunc = makeFunc();
 myFunc();

