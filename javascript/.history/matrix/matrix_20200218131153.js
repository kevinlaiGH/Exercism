

splitAndStore = (string) => {
  let arr = [];

  newStr = string.split("\n").join(" ")

  newStr2 = newStr.split(" ")




  console.log(newStr2, typeof(newStr2))
}

// class Matrix {
//   constructor() {
//     console.log("hi constructor")
//   }

//   get rows() {
//     console.log("hi rows")


//   }

//   get columns() {
//     console.log("hi columns")
//   }
// }


// let matrix = new Matrix('1');
// console.log(matrix.rows());

splitAndStore('1 2\n3 4')
