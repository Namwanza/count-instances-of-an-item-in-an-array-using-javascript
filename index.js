// I decided to use a reduce method over a loop like for or while or do-while loop
// coz in this case using loops would reduce the performance.

//reduce(callback, initialvalue)

var bodabodaStops = [2, 5, 10, 5, 5, 1, 2, 1, 1];
const count = bodabodaStops.reduce((acc, num) => {
  if (typeof acc[num] === 'undefined') {
      acc[num] = 1;
  } else {
      acc[num] += 1;
  }
  return acc;
}, {})

return count;

// output: 1:3, 2:2, 5:3, 10:1
