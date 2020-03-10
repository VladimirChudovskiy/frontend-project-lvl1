import play from '../index.js';
import generateRandom from '../utils.js';

const getBiggestDivisor = (num1, num2) => {
  let divisor = Math.min(num1, num2);

  while (num1 % divisor !== 0 || num2 % divisor !== 0) {
    divisor -= 1;
  }
  return divisor;
};

const rule = 'Find the greatest common divisor of given numbers.';
const generateRound = () => {
  const number1 = generateRandom();
  const number2 = generateRandom();

  const question = `${number1} ${number2}`;
  const answer = getBiggestDivisor(number1, number2).toString();
  return {
    answer,
    question,
  };
};

export default () => {
  play(rule, generateRound);
};
