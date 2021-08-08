
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let result = 0;  // create a variable to store the result

  // as soon as fromN is greater than toN, we end recursion.
  if (fromN > toN) {
    return 0;
  }
  // add the current value of fromN and run sum again adding 1 to fromN to get closer to toN
  result = fromN + sum(fromN + 1, toN);
  return result;  // return the result
}
module.exports = sum;
