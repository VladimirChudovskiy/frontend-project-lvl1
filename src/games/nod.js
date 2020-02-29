import game from '../game.js';
import { generateRandom, biggestDivisor } from '../utils.js';

const nodGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const roundGenerator = () => {
    const number1 = generateRandom();
    const number2 = generateRandom();

    const question = `${number1} ${number2}`;
    const answer = `${biggestDivisor(number1, number2)}`;
    return {
      answer,
      question,
    };
  };

  game(rule, roundGenerator);
};

export default nodGame;
