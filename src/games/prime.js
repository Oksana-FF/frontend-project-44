import { getGame, runNumber } from '../index.js';

const missionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumber = (number) => {
  for (let x = 2; x < number; x += 1) {
    if (number % x === 0) return false;
  }
  return number !== 1;
};

const game = () => {
  const number = runNumber(1, 100);
  const answer = primeNumber(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  getGame(missionGame, game);
};
