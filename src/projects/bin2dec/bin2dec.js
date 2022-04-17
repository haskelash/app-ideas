export default string => {
  let bits = [];
  for (let char of string) {
    let bit = ['0', '1'].indexOf(char);
    if (bit === -1) throw `Unexpected character ${char}`
    bits.push(bit)
  }
  return bits.slice().reverse().reduce((prev, curr, i) => prev + (curr === 1 ? Math.pow(2, i) : 0));
};
