const getMultiplesCountBelow = (of, below) => {
  let res = 0;

  for (let i = 1; i < below; i += 1) {
    for (let j = 0; j < of.length; j += 1) {
      if (i % of[j] === 0) {
        res += i;
        break;
      }
    }
  }

  return res;
};
