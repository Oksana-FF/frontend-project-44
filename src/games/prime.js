import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number < 2) return false;
  for (let x = 2; x <= Math.sqrt(number); x += 1) {
    if (number % x === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 100);
  const answer = isPrimeNumber(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  startGame(gameRules, getQuestionAndAnswer);
};
