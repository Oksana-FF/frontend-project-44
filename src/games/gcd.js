import { getGame, runNumber } from '../index.js';

const missionGame = 'Find the greatest common divisor of given numbers';

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};

const game = () => {
  const runNumber1 = runNumber(1, 20);
  const runNumber2 = runNumber(1, 20);
  const question = `${runNumber1} ${runNumber2}`;
  const answer = NOD(runNumber1, runNumber2);
  return [question, answer];
};

export default () => {
  getGame(missionGame, game);
};
