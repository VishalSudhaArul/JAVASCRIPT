const numbers = [10,20,30,40,50]

// let n1 = numbers[0]
// let n2 = numbers[1]
// console.log(n1)
// console.log(n2)

// another way of writing this be like 
// ECMASCRIPT
// const [n1,n2] = numbers
// console.log(n1)
// console.log(n2)

// destructuring introducing in new version of javascript ECMASCRIPT

// rest operator
// const [n1,n2,n3] = numbers
// console.log(n1)
// console.log(n2)
//console.log(n3)

// skip values
// const [n1,,n2] = numbers
// console.log(n1)
// console.log(n2)


const [n1,n2,n3=10] = [12,15,20] // [12,15]
// console.log(n1)
// console.log(n2)
// console.log(n3)

