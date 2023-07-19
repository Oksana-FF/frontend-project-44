import { getGame, runNumber } from '../index.js';

const missionGame = 'What number is missing in the progression?';

const progression = (firstNumber, lenghtPrg, step) => {
  const runProgression = [];
  for (let i = 0; i <= lenghtPrg; i += 1) {
    const progrNumber = firstNumber + (i * step);
    runProgression.push(progrNumber);
  }
  return runProgression;
};

const game = () => {
  const lenghtPrg = runNumber(5, 10);
  const firstNumber = runNumber(1, 20);
  const step = runNumber(2, 4);
  const runIndex = runNumber(0, lenghtPrg);
  const runProgression = progression(firstNumber, lenghtPrg, step);
  const answer = runProgression[runIndex];
  runProgression[runIndex] = '..';
  const question = runProgression.join(' ');
  return [question, answer];
};

export default () => {
  getGame(missionGame, game);
};
