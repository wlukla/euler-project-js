const getLargestPrimeFactor = (n) => {
  const factors = [];
  let d = 2;

  while (n > 1) {
    while (n % d === 0) {
      factors.push(d);
      n /= d;
    }

    d += 1;
  }

  return factors[factors.length - 1];
};

console.log(getLargestPrimeFactor(600851475143));
