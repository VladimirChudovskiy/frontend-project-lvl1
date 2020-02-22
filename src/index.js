import readlineSync from 'readline-sync';
import evenGame from './games/even.js';
import calcGame from './games/calc.js';
import nodGame from './games/nod.js';

const user = {};

const firstGreeting = () => {
  console.log('Welcome to the Brain Games!');

  user.name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user.name}!`);
};

const onWin = () => {
  console.log(`Congratulations, ${user.name}!`);
};

const onLose = () => {
  console.log(`Let's try again, ${user.name}!`);
};

const play = (gameName) => {
  firstGreeting();
  if (gameName === 'evenGame') {
    evenGame(onWin, onLose, 3);
  } else if (gameName === 'calcGame') {
    calcGame(onWin, onLose, 3);
  } else if (gameName === 'nodGame') {
    nodGame(onWin, onLose, 3);
  }
};

export {
  play,
};

export default firstGreeting;
