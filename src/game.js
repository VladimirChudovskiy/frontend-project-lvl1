import readlineSync from 'readline-sync';

const user = {};
const rounds = 3;

const firstGreeting = () => {
  console.log('Welcome to the Brain Games!');

  user.name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user.name}!`);
};

const game = (rule, roundGenerator) => {
  firstGreeting();

  console.log(rule);

  for (let i = 0; i < rounds; i += 1) {
    const roundData = roundGenerator();

    console.log(`Question: ${roundData.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (roundData.answer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${roundData.answer}".!`);
      console.log(`Let's try again, ${user.name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${user.name}!`);
};


export default game;
