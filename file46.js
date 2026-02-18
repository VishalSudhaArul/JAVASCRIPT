function getStudentInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const student = {
        name: "Vishal",
        email: "vishal@gmail.com",
        age: 21
      };

      resolve(student);   // ✅ fixed here

    }, 2000);
  });
}
function getExamInfo() {
    return new promise ((resolve,reject))
}

function displayInfo(userObj) {
  console.log("Name:", userObj.name);
  console.log("Email:", userObj.email);
  console.log("Age:", userObj.age);
}

async function main() {
  try {
    const result = await getStudentInfo();
    displayInfo(result);
    console.log("Program Completed Successfully");
  } catch (error) {
    console.log("Error:", error);
  }
}

main();
