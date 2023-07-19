import { getGame, runNumber } from '../index.js';

const evenNumber = (number) => number % 2 === 0;

const missionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const number = runNumber(1, 100);
  const answer = evenNumber(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  getGame(missionGame, game);
};
