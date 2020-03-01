export const findAnagrams = (str,arr) => {
  let isAnagram = []
  let processed = (z) => [...z].sort((a, b) => a.localeCompare(b)).join("").toLowerCase()

  for ( let i of arr){
    if (processed(i) === processed(str)){
      isAnagram.push(i)
    }
  }
  return isAnagram
}

// Haven't passed the following tests
// findAnagrams('BANANA', ['BANANA', 'Banana', 'banana'])
// findAnagrams('LISTEN', ['Listen', 'Silent', 'LISTEN'])