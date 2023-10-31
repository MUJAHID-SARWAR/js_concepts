fetch('https://github.com/MUJAHID-SARWAR')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))