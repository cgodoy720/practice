// For Loop
// These take three arguments:
// first: iterator - the variable we are going to use to iterate (i) (starting place for our loop)
// second argument: - condition for how long to keep looping
// third argument: what to do w the iterator after each iteration
// for (let i = 0; i < 5; i++) {
//     // code inside the curly brackets will continue to get executed as long as the `condtion` is true
//     console.log(i)
// } 


// For loop going backwards (counting down)
// Starting from a number, print each number down to zero(excluding)
// for(let i = 5; i > 0; i--){
//     console.log(i)
// }


// Iterating over an array of strings
// We use the array's length in the second argument
const iceCreamFlavors = ['vanilla', 'chocolate', 'strawberry']
// for (let i = 0; i < iceCreamFlavors.length; i++) {
//     // i holds the index of the current value we'd like to print
//     console.log(i)
//     // we can use i to index the iceCreamFlavors to print the value at that index
//     console.log(iceCreamFlavors[i])
// }


const cookies = [
    {
        flavor: 'Chocolate Chip Cookie',
        price: 399,
    },
    {
        flavor: 'Pistachio',
        price: 0
    },
    {
        flavor: 'Sugar Cookie',
        price: 299
    }
]

// Printing out each cookie's flavor
// for (let i = 0; i < cookies.length; i++) {
//     console.log(cookies[i].flavor)
// }


let total = 0
for (let i = 0; i < cookies.length; i++) {
    console.log(cookies[i])
    
    total = total + cookies[i].price
    // Short hand for the line above - using the addition assignment operator below
    // total += cookies[i].price
}
console.log(total)