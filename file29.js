// // function add(a,b) {
// //     console.log(a)
// //     console.log(b)
// // }
// // add(10,50)

// function add(a,b){
//     console.log(arguments)
// }
// add(10,50,60,40,80)


const add = () => {
    console.log(arguments)
//     let sum = arr.reduce((total,num)=>total=num,0)
//     return sum
 };

const result = add(7, 5, 8, 9);
console.log(result);