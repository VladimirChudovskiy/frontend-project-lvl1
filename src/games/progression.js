import readlineSync from 'readline-sync';

const minNumber = 1;
const maxNumber = 100;
const progressionLength = 10;
const minIncrement = 1;
const maxIncrement = 10;
const generateRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getProgression = (start, length, incrementSize) => {
  const result = [];
  let itemToAdd = start;
  for (let i = 0; i < length; i += 1) {
    result.push(itemToAdd);
    itemToAdd += incrementSize;
  }
  return result;
};

const progressionGame = (onWin, onLose, times) => {
  console.log('What number is missing in the progression?');

  for (let i = 0; i < times; i += 1) {
    const firstNumOfProgression = generateRandom(minNumber, maxNumber);
    const incrementSize = generateRandom(minIncrement, maxIncrement);

    const progression = getProgression(firstNumOfProgression, progressionLength, incrementSize);
    const secretIndex = generateRandom(0, progressionLength - 1);
    const correctAnswer = progression[secretIndex];
    progression[secretIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const answer = parseInt(readlineSync.question('Your answer: '), 10);
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".!`);
      onLose();
      return;
    }
  }
  onWin();
};

export default progressionGame;
