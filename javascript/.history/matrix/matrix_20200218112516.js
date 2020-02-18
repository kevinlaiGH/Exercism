
export class Matrix {
  constructor() {
    throw new Error("Remove this statement and implement this function");
  }

  get rows() {
    console.log("Hi")
  }

  get columns() {
    throw new Error("Remove this statement and implement this function");
  }
}


let matrix = new Matrix('1');
console.log(matrix.rows());
