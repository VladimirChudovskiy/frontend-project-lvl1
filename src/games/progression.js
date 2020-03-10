import play from '../index.js';
import generateRandom from '../utils.js';

const getProgression = (start, length, incrementSize) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + i * incrementSize);
  }
  return result;
};

const progressionLength = 10;
const minIncrement = 1;
const maxIncrement = 10;

const rule = 'What number is missing in the progression?';
const generateRound = () => {
  const firstNumOfProgression = generateRandom();
  const incrementSize = generateRandom(minIncrement, maxIncrement);

  const progression = getProgression(firstNumOfProgression, progressionLength, incrementSize);
  const secretIndex = generateRandom(0, progressionLength - 1);
  const answer = progression[secretIndex].toString();
  progression[secretIndex] = '..';
  const question = progression.join(' ');
  return {
    answer,
    question,
  };
};


export default () => {
  play(rule, generateRound);
};
