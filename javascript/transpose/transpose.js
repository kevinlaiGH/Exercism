
export const transpose = (arrOfStrings) => {

  if (arrOfStrings.length === 0){
    return []
  }

  if (arrOfStrings.length === 1){
    return [...arrOfStrings].join("").split("")
  }

  if (arrOfStrings.length === 2){
    return [arrOfStrings.join("")]
  }

};


// ['A', '1'] => return ['A1']
// transpose(['A1'])
// transpose(['A', '1'])
// transpose(['ABC', '123'])