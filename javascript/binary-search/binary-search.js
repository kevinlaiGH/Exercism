export const find = (arr, targetNum) => {
  for ( let i = 0; i < arr.length; i++){
    if (targetNum === arr[i]){
      return i
    }
    throw new Error('Value not in array')
  }
};

// find([1, 3, 4, 6, 8, 9, 11], 6)
