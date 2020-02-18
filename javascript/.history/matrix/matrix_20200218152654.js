class Matrix {
  constructor(num) {
    this.num = num
    let a = num.split('\n')
    this.arrWithInt = []

    this.arrForCol = []

    for (let i = 0;i < a.length;i++){
      let arrWithStr = a[i].split(' ')
      arrWithStr = arrWithStr.map(x=> parseInt(x,10))
      this.arrWithInt.push(arrWithStr)
      console.log(this.arrWithInt)
      // for (let j = 0; j < a.length; j ++){
      //   pass
      // }
    }
    let mat = []
    for(let i = 0 ; i < this.arrWithInt[0].length ; i++){
      ll = []
      for(let j = 0 ; j < this.arrWithInt.length ; j++){
        ll.push(this.arrWithInt[i][j])
      }
      mat.push(ll)
    }
    console.log(mat)
  }

  get rows() {
    return this.arrWithInt
    // console.log(this.arrWithInt)
  }

  get columns() {
    return this.arrWithCol
  }
}
let something = new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6')
// something.rows




