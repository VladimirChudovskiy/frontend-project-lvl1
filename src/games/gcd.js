import game from '../game.js';
import { generateRandom } from '../utils.js';

const biggestDivisor = (num1, num2) => {
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
  const answer = `${biggestDivisor(number1, number2)}`;
  return {
    answer,
    question,
  };
};

export default () => {
  game(rule, generateRound);
};
