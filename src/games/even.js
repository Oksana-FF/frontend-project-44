import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEvenNumber = (number) => number % 2 === 0;

const missionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGame = () => {
  const number = getRandomNumber(1, 100);
  const answer = isEvenNumber(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  startGame(missionGame, getGame);
};
