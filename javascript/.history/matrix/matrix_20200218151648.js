export class Matrix {
  constructor(num) {
    this.num = num
    let arrWithStr = num.split('\n')
    this.arrWithInt = []

    this.arrForCol = []

    for (let i = 0;i < arrWithStr.length;i++){
      let arrWithStr = arrWithStr[i].split(' ')
      arrWithStr = arrWithStr.map(x=> parseInt(x,10))
      this.arrWithInt.push(arrWithStr)

      for (let j = 0; j < arrWithStr.length; j ++){
        this.arrForCol.push()
      }
    }
  }

  get rows() {
    return this.arrWithInt
    // console.log(this.arrWithInt)
  }

  get columns() {
    return this.arrWithCol
  }
}
// let something = new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6')
// something.rows




