import readlineSync from 'readline-sync';

const minNumber = 1;
const maxNumber = 100;

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isEven = (number) => number % 2 === 0;

const evenGame = (onWin, onLose, times) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < times; i += 1) {
    const number = generateRandom(minNumber, maxNumber);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = (isEven(number)) ? 'yes' : 'no';
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

export default evenGame;
