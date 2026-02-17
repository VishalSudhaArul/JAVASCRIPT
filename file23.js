let marks = [78, 50, 90, 20];
const result = marks.some((mark)=> {
    return mark>50;
});

if (result) console.log("Pass");
else console.log("Fail");

// if(result) console.log("pass");
// else console.log("Fail");