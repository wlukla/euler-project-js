const getNPrime = (n) => {
  let current = 0;
  let primeCounter = 0;

  while (primeCounter <= n) {
    current += 1;
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(current); i += 1) {
      if (current % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeCounter += 1;
    }
  }

  return current;
};

console.log(getNPrime(10001));
