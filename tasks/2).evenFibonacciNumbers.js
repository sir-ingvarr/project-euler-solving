const fiboSum = (fst = 0, second = 1, sum = 0, max = 4000000, divider = 2) =>   
  fst < max ? fiboSum(second, fst + second, (fst % 2 === 0 ? (sum + fst) : sum), max, divider) : sum;
  
module.exports = fiboSum;

