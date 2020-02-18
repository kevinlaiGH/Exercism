class Matrix {
  constructor(num) {
    let a = num.split('\n')
    let lis = []


    for (let i = 0;i < a.length;i++){
      let o = a[i].split(' ')
      o = o.map(x=> parseInt(x,10))
      lis.push(o)
    }
    console.log(lis)

  }


  // get rows() {
  // }

  // get columns() {
  // }
}
new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6')





