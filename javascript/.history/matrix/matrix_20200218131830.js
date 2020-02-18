

splitAndStore = (string) => {
  let arr = [];

  let arrWithString = string.split("\n").join(" ").split(" ")

  let arrWithInt = arrWithString.map( x => parseInt(x,10))

  console.log(arrWithInt, typeof(arrWithInt[1]))
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

