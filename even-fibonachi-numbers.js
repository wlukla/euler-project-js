const sumOfEvenFibonacciBelow = (below) => {
  let res = 0;

  let first = 1;
  let second = 2;

  while (second < below) {
    if (second % 2 === 0) res += second;

    const next = first + second;
    first = second;
    second = next;
  }

  console.log(second);

  return res;
};

console.log(sumOfEvenFibonacciBelow(4000000));
