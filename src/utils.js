const generateRandom = (min = 1, max = 100) => Math
  .floor(Math.random() * (max - min) + min);

const generateOperation = () => {
  const posibilitySignPlus = 40;
  const posibilitySignMinus = 40;
  const num = Math.floor(Math.random() * 100);
  if (num <= posibilitySignPlus) {
    return '+';
  }
  if (num > posibilitySignPlus && num < posibilitySignPlus + posibilitySignMinus) {
    return '-';
  }
  return '*';
};

const isEven = (number) => number % 2 === 0;

const biggestDivisor = (num1, num2) => {
  let divisor = Math.min(num1, num2);

  while (num1 % divisor !== 0 || num2 % divisor !== 0) {
    divisor -= 1;
  }
  return divisor;
};

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getProgression = (start, length, incrementSize) => {
  const result = [];
  let itemToAdd = start;
  for (let i = 0; i < length; i += 1) {
    result.push(itemToAdd);
    itemToAdd += incrementSize;
  }
  return result;
};

export {
  generateRandom,
  generateOperation,
  isEven,
  biggestDivisor,
  isPrime,
  getProgression,
};
