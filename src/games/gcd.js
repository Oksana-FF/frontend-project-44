import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers';

const getGcd = (x, y) => {
  if (y > x) return getGcd(y, x);
  if (!y) return x;
  return getGcd(y, x % y);
};

const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 20);
  const randomNumber2 = getRandomNumber(1, 20);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(getGcd(randomNumber1, randomNumber2));
  return [question, answer];
};

export default () => {
  startGame(gameRules, getQuestionAndAnswer);
};
