let result = -1;
function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let n = 0; n < students.length; n++) {
    if (searchStudent === students[n]) {
      return n;
    }
  }
  return result;
}

const students = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
console.log(findStudentIndex(students, "Andrew"));

// const students =  ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]
// console.log(findStudentIndex(students, "John"));

// ตอบคำถามตรงนี้จ้า
// ANS: 2**n
