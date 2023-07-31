import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const missionGame = 'What number is missing in the progression?';

const getpProgression = (firstNumber, lenghtPrg, step) => {
  const randomProgression = [];
  for (let i = 0; i <= lenghtPrg; i += 1) {
    const progrNumber = firstNumber + (i * step);
    randomProgression.push(progrNumber);
  }
  return randomProgression;
};

const getGame = () => {
  const lenghtPrg = getRandomNumber(5, 10);
  const firstNumber = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 4);
  const runIndex = getRandomNumber(0, lenghtPrg);
  const randomProgression = getpProgression(firstNumber, lenghtPrg, step);
  const answer = String(randomProgression[runIndex]);
  randomProgression[runIndex] = '..';
  const question = randomProgression.join(' ');
  return [question, answer];
};

export default () => {
  startGame(missionGame, getGame);
};
