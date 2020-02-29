import game from '../game.js';
import { generateRandom, getProgression } from '../utils.js';

const progressionLength = 10;
const minIncrement = 1;
const maxIncrement = 10;

const progressionGame = () => {
  const rule = 'What number is missing in the progression?';
  const roundGenerator = () => {
    const firstNumOfProgression = generateRandom();
    const incrementSize = generateRandom(minIncrement, maxIncrement);

    const progression = getProgression(firstNumOfProgression, progressionLength, incrementSize);
    const secretIndex = generateRandom(0, progressionLength - 1);
    const answer = `${progression[secretIndex]}`;
    progression[secretIndex] = '..';
    const question = `${progression.join(' ')}`;
    return {
      answer,
      question,
    };
  };

  game(rule, roundGenerator);
};

export default progressionGame;
