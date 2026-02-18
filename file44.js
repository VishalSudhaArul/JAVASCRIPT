function f1(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Generated Number:", x);

      if (x % 2 === 0) {
        resolve("Even Number");
      } else {
        reject("Odd Numbers not allowed");
      }
    }, 3000);
  });
}

async function main() {
  let num = Math.round(Math.random() * 10);

  try {
    const result = await f1(num);
    console.log("Program Completed Successfully,", result);
  } catch (err) {
    console.log("Error:", err);
  }
}

main();
