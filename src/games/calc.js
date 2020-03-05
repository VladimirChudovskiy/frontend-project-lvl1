import game from '../game.js';
import { generateRandom } from '../utils.js';

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

const rule = 'What is the result of the expression?';
const generateRound = () => {
  const number1 = generateRandom();
  const number2 = generateRandom();
  const operation = generateOperation();

  const question = `${number1} ${operation} ${number2}`;
  let answer;
  switch (operation) {
    case '-':
      answer = number1 - number2;
      break;
    case '+':
      answer = number1 + number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      answer = 0;
  }
  answer += '';
  return {
    answer,
    question,
  };
};

export default () => {
  game(rule, generateRound);
};
