export class Matrix {
  constructor(num) {
    this.num = num
    let a = num.split('\n')
    this.arrWithInt = []

    for (let i = 0;i < a.length;i++){
      let arrWithStr = a[i].split(' ')
      arrWithStr = arrWithStr.map(x=> parseInt(x,10))
      this.arrWithInt.push(arrWithStr)
    }

  }

  get rows() {
    return this.arrWithInt
    // console.log(this.arrWithInt)
  }

  get columns() {
  }
}
// let something = new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6')
// something.rows




