
export const reverseString = (str) => {
  // 1)
  // const reversed = str.split("").reverse().join("")

  // const reversed = [...str].reverse().join("")

  // starting at the last character, as long as character is greater than or 
  // equal to 0 (i.e. not equal to -1), we decrement and move on the next last character.

  let reversed = "";
  for (let i = str.length - 1; i >=0 ;i--){
    reversed += str[i]
  }
  return reversed
  // console.log(reversed)
};

// reverseString('robot')