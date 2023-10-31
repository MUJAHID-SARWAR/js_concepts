const promisesClass = new Promise(function (resolve, reject) {
  // DO an Async Task
  // dataBase Calls, Cryptography, network Calling
  setTimeout(function () {
    console.log("Async task is Completed");
    resolve();
  }, 1000);
});
promisesClass.then(function () {
  console.log("The promise is consumed");
});

// Method No 2

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2 is Completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 is also Consumed");
});

// Method No 3

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      userName: "Mujahid Sarwar",
      gmail: "mujahid@meta.com",
      compnayName: "World Best",
    });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

// Method No 4
const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "Mujahid Sarwar", password: "1234" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
promise4
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(()=> {console.log('Promise is finally resolve or rejected')})

  // Promise No 5
  const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({userName:'JavaScript', password:'1234'})
        } else{
            reject('ERROR: JS went wrong')
        }
    },1000)
  });

  async function consumePromise5 (){
   try {
    const response =  await promise5
    console.log(response)
   } catch (error) {
    console.log(error)
   } 
}
  consumePromise5()

//  async function getAllUsers (){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//    } catch (error) {
//     console.log("E: ", error)
//    }
//  } 
// getAllUsers()

fetch('https://github.com/MUJAHID-SARWAR')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))