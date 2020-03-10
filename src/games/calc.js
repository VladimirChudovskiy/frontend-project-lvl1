import play from '../index.js';
import generateRandom from '../utils.js';

const operations = {
  plus: '+',
  minus: '-',
  multiplication: '*',
};

const generateOperation = () => {
  const posibilitySignPlus = 40;
  const posibilitySignMinus = 40;
  const num = generateRandom();
  if (num <= posibilitySignPlus) {
    return operations.plus;
  }
  if (num > posibilitySignPlus && num < posibilitySignPlus + posibilitySignMinus) {
    return operations.minus;
  }
  return operations.multiplication;
};

const rule = 'What is the result of the expression?';
const generateRound = () => {
  const number1 = generateRandom();
  const number2 = generateRandom();
  const operation = generateOperation();

  const question = `${number1} ${operation} ${number2}`;
  let answer;
  switch (operation) {
    case operations.minus:
      answer = number1 - number2;
      break;
    case operations.plus:
      answer = number1 + number2;
      break;
    case operations.multiplication:
      answer = number1 * number2;
      break;
    default:
      answer = null;
  }
  answer += '';
  return {
    answer,
    question,
  };
};

export default () => {
  play(rule, generateRound);
};
