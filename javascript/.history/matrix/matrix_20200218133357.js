

// splitAndStore = (string) => {
//   let arr = [];

//   let arrWithString = string.split("\n").join(" ").split(" ")

//   let arrWithInt = arrWithString.map( x => parseInt(x,10))

//   console.log(arrWithInt, typeof(arrWithInt[1]))
// }

class Matrix {
  constructor(num) {
    let a = num.split('\n')
    let lis = []

    a = a.map(x => x.split(' ')).map((x,y) => [parseInt(x),parseInt(y)]  )
    console.log(a)
   
    

    // for (let i = 0;i < a.length;i++){
    //   console.log(a[i]);
    //   let o = a[i].split(' ')
    //   o = o.map(x=> parseInt(x,10))
    //   console.log(o);
    //   lis.push(o)
    // }
    // console.log(lis)
    

  }


  // get rows() {



  // }

  // get columns() {

  // }
}
new Matrix('1 2\n3 4')





