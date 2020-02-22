import readlineSync from 'readline-sync';

const minNumber = 1;
const maxNumber = 100;
const generateRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = (onWin, onLose, times) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < times; i += 1) {
    const number = generateRandom(minNumber, maxNumber);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = (isPrime(number)) ? 'yes' : 'no';
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

export default primeGame;
