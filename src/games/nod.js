import readlineSync from 'readline-sync';

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const biggestDivisor = (num1, num2) => {
  let divisor = Math.min(num1, num2);

  while (num1 % divisor !== 0 || num2 % divisor !== 0) {
    divisor -= 1;
  }
  return divisor;
};

const nodGame = (onWin, onLose, times) => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < times; i += 1) {
    const number1 = generateRandom(1, 100);
    const number2 = generateRandom(1, 100);
    console.log(`Question: ${number1} ${number2}`);
    const answer = parseInt(readlineSync.question('Your answer: '), 10);
    const correctAnswer = biggestDivisor(number1, number2);
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

export default nodGame;
