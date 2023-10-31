// const coding = ['js' , 'java' , 'cpp' , 'Ruby' , 'kotlin']

// const value =coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(value);

const myNums = [1,2,3,4,5,6,7,8,9,10,3,2]

// const newNums = myNums.filter((num) =>
//     num > 4

// )

// if scope {} is open then return key word is must otherwise it give empty array or object 
// const newNums = myNums.filter((num) =>{
    // return num > 4
// })
// console.log(newNums);

// const newNums = []

// myNums.forEach ((num) =>{
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    
    { title: 'Book1',  genre: 'History',publish: 2002,   edition: 2001 },
    { title: 'Book2',  genre: 'sci',publish: 1986,   edition: 2001 },
    { title: 'Book3',  genre: 'Bio',publish: 2023,   edition: 2001 },
    { title: 'Book4',  genre: 'phy',publish: 1986,   edition: 2001 },
    { title: 'Book5',  genre: 'chmy',publish: 1986,   edition: 2001 },
    { title: 'Book6',  genre: 'History',publish: 2002,   edition: 2001 },
    { title: 'Book7',  genre: 'History',publish: 1986,   edition: 2001 },
    { title: 'Book8',  genre: 'CS',publish: 2014,   edition: 2001 },
    { title: 'Book9',  genre: 'AI',publish: 2003,   edition: 2001 },
    { title: 'Book10',  genre: 'DSA',publish: 1986,   edition: 2001 }
]

// const userBooks = books.filter((bk)=> bk.genre === 'History' )
//  let userBooks = books.filter ((bk) => bk.publish >= 2000)
  userBooks = books.filter ((bk) => {

    return bk.publish >= 2000 && bk.genre === 'History' 
})

console.log(userBooks)