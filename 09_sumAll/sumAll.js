const sumAll = function(min,max) {
    if (!Number.isInteger(min)||!Number.isInteger(max)) return "ERROR"; // For integers 
    if (min <0 || max < 0) return "ERROR"; // For Negative nos 
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

const result = sumAll(2,4);
console.log(result)


// Do not edit below this line
module.exports = sumAll;
