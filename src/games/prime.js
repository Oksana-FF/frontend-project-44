import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const missionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number === 0 || number === 1) return false;
  for (let x = 2; x < number; x += 1) {
    if (number % x === 0) return false;
  }
  return true;
};

const getGame = () => {
  const number = getRandomNumber(1, 100);
  const answer = isPrimeNumber(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  startGame(missionGame, getGame);
};
