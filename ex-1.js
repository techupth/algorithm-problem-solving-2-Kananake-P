function findStudentIndex(students, searchStudent) {
  let left = 0;
  let right = students.length - 1;
  let index = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (students[mid] === searchStudent) {
      index = mid;
      break;
    } else if (students[mid] < searchStudent) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return index;
}

const students = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
console.log(findStudentIndex(students, "Andrew"));

// ตอบคำถามตรงนี้จ้า
// ANS: log n

// const students = [
//   "Andrew",
//   "Bobby",
//   "Diana",
//   "George",
//   "Hannah",
//   "Isaac",
//   "Jasmine",
//   "John",
// ];
// console.log(findStudentIndex(students, "John"));

// let result = -1;
// function findStudentIndex(students, searchStudent) {
//   // เริ่มเขียนโค้ดตรงนี้จ้า
//   for (let n = 0; n < students.length; n++) {
//     if (searchStudent === students[n]) {
//       return n;
//     }
//   }
//   return result;
// }

// const students = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
// console.log(findStudentIndex(students, "Andrew"));

// const students =  ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]
// console.log(findStudentIndex(students, "John"));
