import readlineSync from 'readline-sync';

const minNumber = 1;
const maxNumber = 100;
const posibilitySignPlus = 40;
const posibilitySignMinus = 40;

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateOperation = () => {
  const num = Math.floor(Math.random() * 100);
  if (num <= posibilitySignPlus) {
    return '+';
  }
  if (num > posibilitySignPlus && num < posibilitySignPlus + posibilitySignMinus) {
    return '-';
  }
  return '*';
};

const calcGame = (onWin, onLose, times) => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < times; i += 1) {
    const number1 = generateRandom(minNumber, maxNumber);
    const number2 = generateRandom(minNumber, maxNumber);
    const operation = generateOperation();
    console.log(`Question: ${number1} ${operation} ${number2}`);
    const answer = parseInt(readlineSync.question('Your answer: '), 10);
    let correctAnswer;
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
