// let score = 50
// let result
// if(score>50) {
//     result="pass"
// }
// console.log(result)
// we can do this using terinary operator 

// let score =90 
// let result=score>50?"pass":"fail"
//console.log(result)

// let score=90
// let result = score>50 && "pass"
// console.log(result)

// let score 
// let result=score|| 30
// console.log(result)
let score = 49;

switch (true) {
    case (score >= 90):
        console.log("Grade A");
        break;
    case (score >= 70):
        console.log("Grade B");
        break;
    case (score >= 50):
        console.log("Grade C");
        break;
    default:
        console.log("Fail");
}