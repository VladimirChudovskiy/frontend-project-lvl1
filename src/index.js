import readlineSync from 'readline-sync';
import evenGame from './games/even.js';
import calcGame from './games/calc.js';
import nodGame from './games/nod.js';
import progressionGame from './games/progression.js';
import primeGame from './games/prime.js';

const gameRounds = 3;
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
    evenGame(onWin, onLose, gameRounds);
  } else if (gameName === 'calcGame') {
    calcGame(onWin, onLose, gameRounds);
  } else if (gameName === 'nodGame') {
    nodGame(onWin, onLose, gameRounds);
  } else if (gameName === 'progressionGame') {
    progressionGame(onWin, onLose, gameRounds);
  } else if (gameName === 'primeGame') {
    primeGame(onWin, onLose, gameRounds);
  }
};

export {
  play,
};

export default firstGreeting;
