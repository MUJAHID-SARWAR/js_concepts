const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}


const greetings = 'Hello MUjahid!'
for (const greet of greetings) {
    // console.log(`I want to Say ${greet}`)
}

// Maps

const map = new Map ()

map.set ('Pak' , 'Paistan')
map.set ('IN' , 'India')
map.set ('GR' , 'Germany')


// console.log(map);

for (const [key , value] of map) {

    // console.log(key, ':-' , value)  
}

const myObject ={
    game: 'PUBG',
    'game2': 'Zombie Killer',

}
for (const [ey , value] of myObject) {
    // console.log(key, ':-' , value)
}