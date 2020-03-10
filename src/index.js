import readlineSync from 'readline-sync';

const countOfRounds = 3;

const play = (rule, generateRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rule);

  for (let i = 0; i < countOfRounds; i += 1) {
    const roundData = generateRound();

    console.log(`Question: ${roundData.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (roundData.answer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${roundData.answer}".!`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};


export default play;
