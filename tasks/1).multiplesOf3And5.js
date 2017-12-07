module.exports = () => {
  let sum=0;
  for(let i=3; i<1000; i+=3) {
    i % 5 !== 0 ? sum += i : {};
  }
  for(let i = 5; i < 1000; i+=5) {
    sum += i;
  }
  return sum;  
}

/*
*answer: 233168
*taskTime: 5741.332ms per [1000000] iterations
*/