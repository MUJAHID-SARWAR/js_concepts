const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

const allHero = marvel_heros.concat(dc_heros)
// console.log(allHero);

// const allHero_new = [...marvel_heros, ...dc_heros]
// console.log(allHero_new);
const another_array = [12,[3,4,5] ,9,4[4,8,[26,[9,4]]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("MUjahid"))
console.log(Array.from("MUjahid"))
console.log(Array.from({name: "mujahid"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));