const getSumSquareDifferenceForFirstBrute = (n) => {
  const numbers = [];

  for (let i = 0; i <= n; i += 1) {
    numbers.push(i);
  }

  console.log(numbers);

  const sumOfSquares = numbers.reduce((acc, val) => acc + val ** 2, 0);
  const squareOfSum = numbers.reduce((acc, val) => acc + val, 0) ** 2;

  return squareOfSum - sumOfSquares;
};

console.log(getSumSquareDifferenceForFirstBrute(100));

const getSumSquareDifferenceForFirstEfficient = (n) => {
  const squareOfSum = ((n * (n + 1)) / 2) ** 2;
  const sumOfSquares = ((2 * n + 1) * (n + 1) * n) / 6;

  return squareOfSum - sumOfSquares;
};

console.log(getSumSquareDifferenceForFirstEfficient(100));
