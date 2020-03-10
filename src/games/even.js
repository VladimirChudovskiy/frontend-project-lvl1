import play from '../index.js';
import generateRandom from '../utils.js';

const isEven = (number) => number % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateRound = () => {
  const question = generateRandom();
  const answer = (isEven(question)) ? 'yes' : 'no';
  return {
    answer,
    question,
  };
};

export default () => {
  play(rule, generateRound);
};
