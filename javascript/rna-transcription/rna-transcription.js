
const rnaTranscription = { "C": "G", "G": "C", "A": "U", "T": "A"}

const getRna = (rna) => {
  return rnaTranscription[rna]
}


export const toRna = (rna) => {
  return rna.replace(/./g, getRna)
};

