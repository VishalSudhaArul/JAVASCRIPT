// const student = {
//     name:"John",
//     age:21
// }

// const names = ["John","Catht","Mike"]
// const[name1,name2,name3]=names;
// console.log(name1)
// console.log(name2)

// const {name,age} = student 
// console.log(name)
// console.log(age)



// const student = {
//     n1:"John",
//     n2:21
// }

// const{n1,n2}=student
// console.log(n1)
// console.log(n2)
const student = {
    name: "John",
    age: 21,
    city: "Jalandhar",
    marks: {
        math: 60,
        science: 90
    }
};

// 1. Extract full marks object
const { marks } = student;
console.log(marks);

// 2. Extract nested math value
const { marks: { math } } = student;
console.log(math);

// 3. Rename name to userName
const { name: userName } = student;
console.log(userName);

// 4. Default value (only works if property missing)
const { city = "Amritsar" } = student;
console.log(city);

