import game from '../game.js';
import { generateRandom, generateOperation } from '../utils.js';

const calcGame = () => {
  const rule = 'What is the result of the expression?';
  const roundGenerator = () => {
    const number1 = generateRandom();
    const number2 = generateRandom();
    const operation = generateOperation();

    const question = `${number1} ${operation} ${number2}`;
    let answer;
    if (operation === '-') answer = number1 - number2;
    if (operation === '+') answer = number1 + number2;
    if (operation === '*') answer = number1 * number2;

    answer += '';
    return {
      answer,
      question,
    };
  };

  game(rule, roundGenerator);
};

export default calcGame;
