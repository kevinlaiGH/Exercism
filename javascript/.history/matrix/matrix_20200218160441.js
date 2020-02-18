export class Matrix {
  constructor(num) {
    this.num = num
    let a = num.split('\n')
    this.arrForRow = []

    for (let i = 0;i < a.length;i++){
      let arrWithStr = a[i].split(' ')
      arrWithStr = arrWithStr.map(x=> parseInt(x,10))
      this.arrForRow.push(arrWithStr)
    }
    this.arrForCol = []
    for(let i = 0 ; i < this.arrForRow[0].length ; i++){
      let ll = []
      for(let j = 0 ; j < this.arrForRow.length ; j++){
        ll.push(this.arrForRow[j][i])
      }
      this.arrForCol.push(ll)
    }

  }

  get rows() {
    return this.arrForRow
  }

  get columns() {
    return this.arrForCol
  }
}
// let something = new Matrix('89 1903 3\n18 3 1\n9 4 800')
// something.rows




