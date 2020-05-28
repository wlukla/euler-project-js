const isPalindrome = (num) => {
  const strFromNum = String(num);
  const reverseStrFromNum = strFromNum.split('').reverse().join('');

  return strFromNum === reverseStrFromNum;
};

const getLargestPalindrome = () => {
  let max = 0;

  for (let i = 999; i >= 100; i -= 1) {
    for (let j = 999; j >= 100; j -= 1) {
      if (isPalindrome(i * j) && i * j > max) {
        max = i * j;
      }
    }
  }

  return max;
};

console.log(getLargestPalindrome());
