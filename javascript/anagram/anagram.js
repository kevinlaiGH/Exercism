const findAnagrams = (str,arr) => {
  let splitStr = [...str].sort((a, b) => a.localeCompare(b)).join("").toLowerCase()
  // console.log("splitStr is",splitStr)
  let isAnagram = []


  for ( let i of arr){
    let newTest = [...i].sort((a, b) => a.localeCompare(b)).join("").toLowerCase()
    // console.log("newTest is", newTest)

    if (newTest === splitStr){
      isAnagram.push(i)
    }
  }
  // return isAnagram
  console.log(isAnagram)
}

// if index 1,2,3,4,5 = index 1,2,3,4,5 => return

findAnagrams('diaper', ['hello', 'world', 'zombies', 'pants'])
findAnagrams('master', ['stream', 'pigeon', 'maters'])
findAnagrams('nose', ['Eons', 'ONES'])
findAnagrams('Orchestra', ['cashregister', 'Carthorse', 'radishes'])

// findAnagrams('BANANA', ['BANANA', 'Banana', 'banana'])