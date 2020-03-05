import game from '../game.js';
import { generateRandom } from '../utils.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateRound = () => {
  const question = generateRandom();
  const answer = (isPrime(question)) ? 'yes' : 'no';
  return {
    answer,
    question,
  };
};

export default () => {
  game(rule, generateRound);
};
