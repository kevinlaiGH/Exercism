//
// This is only a SKELETON file for the 'High-Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(arr) {
    this.arr = arr
  }

  get scores() {
    return this.arr
    // console.log(this.arr)
  }

  get latest() {
    // console.log(this.arr.reverse()[0])
    return this.arr.reverse()[0]
  }

  get personalBest() {
    // console.log(Math.max(...this.arr))
    return Math.max(...this.arr)
  }

  get personalTopThree() {
    // return Math.max(...this.arr)
    // console.log(Math.max(...this.arr))

    let empty = []

    let newArr = this.arr.sort((a,b) => a - b).reverse()
    // console.log("break:",newArr)
    let len = (this.arr.length < 3) ? this.arr.length : 3

    for ( let i = 0; i < len; i++){
      empty.push(newArr[i])
    }
    // console.log(empty)
    return empty
  }
}

// let a = new HighScores([10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 70])
// a.personalTopThree