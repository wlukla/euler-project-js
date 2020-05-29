const getSumSquareDifferenceForFirst = (n) => {
  const numbers = [];

  for (let i = 0; i <= n; i += 1) {
    numbers.push(i);
  }

  console.log(numbers);

  const sumOfSquares = numbers.reduce((acc, val) => acc + val ** 2, 0);
  const squareOfSum = numbers.reduce((acc, val) => acc + val, 0) ** 2;

  return squareOfSum - sumOfSquares;
};

console.log(getSumSquareDifferenceForFirst(100));
