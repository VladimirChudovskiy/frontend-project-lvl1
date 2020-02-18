import readlineSync from 'readline-sync';

const user = {};

const firstGreeting = () => {
  console.log('Welcome to the Brain Games!');

  user.name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user.name}!`);
};

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isEven = (number) => number % 2 === 0;

const brainEven = () => {
  firstGreeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = generateRandom(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = (isEven(number)) ? 'yes' : 'no';
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".!`);
      console.log(`Let's try again, ${user.name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${user.name}!`);
};

export {
  brainEven,
};

export default firstGreeting;
