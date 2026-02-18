const students = [
  { id: 1, name: "Vansh", s1: true, s2: true, s3: false },
  { id: 2, name: "Vaishnav", s1: true, s2: true, s3: true },
  { id: 3, name: "Nikhil", s1: false, s2: true, s3: true },
];

function getStudentInfo(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = students.find((student) => student.id === id);

      if (!found) {
        reject("Student does not exist");
        return;
      }

      resolve(found); // return full student object
    }, 2000);
  });
}

function getAttendanceInfo(student) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const isPresent = student.s1 && student.s2 && student.s3;

      if (isPresent) {
        resolve("Student is Present in all sessions");
      } else {
        reject("Student is Absent in one or more sessions");
      }

    }, 1000);
  });
}

function getExamInfo(student) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Exam evaluated for ${student.name}`);
    }, 1500);
  });
}

async function main() {
  try {
    const studentId = 1;

    const student = await getStudentInfo(studentId);
    console.log("Student Info:", student);

    const attendance = await getAttendanceInfo(student);
    console.log(attendance);

    const exam = await getExamInfo(student);
    console.log(exam);

    console.log("Student has been promoted 🎉");

  } catch (err) {
    console.log("Error:", err);
  }
}

main();
