export class HighScores {
  constructor(arr) {
    this.arr = arr
  }

  get scores() {
    return this.arr
  }

  get latest() {
    return this.arr.reverse()[0]
  }

  get personalBest() {
    return Math.max(...this.arr)
  }

  get personalTopThree() {
    let empty = []
    let newArr = this.arr.sort((a,b) => a - b).reverse()
    let len = (this.arr.length < 3) ? this.arr.length : 3
    for ( let i = 0; i < len; i++){
      empty.push(newArr[i])
    }
    return empty
  }
}