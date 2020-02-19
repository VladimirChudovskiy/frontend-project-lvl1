import readlineSync from 'readline-sync';

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateOperation = () => {
  const num = Math.floor(Math.random() * (100 - 0) + 0);
  if (num <= 40) {
    return '+';
  }
  if (num > 40 && num < 80) {
    return '-';
  }
  return '*';
};

const calcGame = (onWin, onLose, times) => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < times; i += 1) {
    const number1 = generateRandom(1, 100);
    const number2 = generateRandom(1, 100);
    const operation = generateOperation();
    console.log(`Question: ${number1} ${operation} ${number2}`);
    const answer = parseInt(readlineSync.question('Your answer: '), 10);
    let correctAnswer = 0;
    if (operation === '-') correctAnswer = number1 - number2;
    if (operation === '+') correctAnswer = number1 + number2;
    if (operation === '*') correctAnswer = number1 * number2;
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

export default calcGame;
