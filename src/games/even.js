import game from '../game.js';
import { generateRandom, isEven } from '../utils.js';

const evenGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const roundGenerator = () => {
    const question = generateRandom();
    const answer = (isEven(question)) ? 'yes' : 'no';
    return {
      answer,
      question,
    };
  };

  game(rule, roundGenerator);
};

export default evenGame;
