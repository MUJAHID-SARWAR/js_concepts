const myNumbers = [1,2,3,4]

// const totalSum =myNumbers.reduce(function (accumulator, currentValue) {
    console.log(`acc: ${accumulator} and currentValue is: ${currentValue}`)
//         return accumulator + currentValue
// }, 0 )

// console.log(totalSum);

const totalSum = myNumbers.reduce((accumulator,currentValue) => accumulator + currentValue , 0 )

console.log(totalSum);

const shoppingCart = [
    {
        itemName: 'Js course',
        price: 1999
    },
    {
        itemName: 'Java course',
        price: 2999
    },
    {
        itemName: 'Ruby course',
        price: 4999
    },
]

const pricePay = shoppingCart.reduce((acc , item) => acc + item.price , 0)

console.log(pricePay);