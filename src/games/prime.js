import game from '../game.js';
import { generateRandom, isPrime } from '../utils.js';

const primeGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const roundGenerator = () => {
    const question = generateRandom();
    const answer = (isPrime(question)) ? 'yes' : 'no';
    return {
      answer,
      question,
    };
  };

  game(rule, roundGenerator);
};

export default primeGame;
