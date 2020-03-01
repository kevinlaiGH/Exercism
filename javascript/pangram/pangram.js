export const isPangram = (str) => {
  let normalize = (z) => new Set([...z])
  let validStr = str.toLowerCase().replace(/[""!@#$%^&*._\s0-9]/g, "")
  let arr = [...normalize(validStr)]
  return (arr.length === 26 ? true : false)
};
