export class Matrix {
  constructor(num) {
    this.num = num
    let a = num.split('\n')
    this.arrWithInt = []

    for (let i = 0;i < a.length;i++){
      let arrWithStr = a[i].split(' ')
      arrWithStr = arrWithStr.map(x=> parseInt(x,10))
      this.arrWithInt.push(arrWithStr)
      console.log(this.arrWithInt)
    }
    this.mat = []
    for(let i = 0 ; i < this.arrWithInt[0].length ; i++){
      let ll = []
      for(let j = 0 ; j < this.arrWithInt.length ; j++){
        ll.push(this.arrWithInt[j][i])
      }
      mat.push(ll)
    }

  }

  get rows() {
    return this.arrWithInt
    // console.log(this.arrWithInt)
  }

  get columns() {
    return this.mat
  }
}
let something = new Matrix('89 1903 3\n18 3 1\n9 4 800')
// something.rows




