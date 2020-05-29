const getSmallestEvenlyDivisibleByRange = (from, to) => {
  let current = 1;

  let divideByArr = [];

  for (let i = from; i <= to; i++) {
    divideByArr.push(i);
  }

  console.log(divideByArr);

  while (true) {
    let divisible = false;
    for (let i = 0; i < divideByArr.length; i++) {
      if (current % divideByArr[i] === 0) divisible = true;
      else {
        divisible = false;
        break;
      }
    }

    if (divisible) break;

    current += 1;
  }

  return current;
};

console.log(getSmallestEvenlyDivisibleByRange(1, 20));
