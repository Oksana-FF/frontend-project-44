import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (firstNumber, step) => {
  const randomProgression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    const progressionNumber = firstNumber + (i * step);
    randomProgression.push(progressionNumber);
  }
  return randomProgression;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 4);
  const randomIndex = getRandomNumber(0, progressionLength);
  const randomProgression = getProgression(firstNumber, step);
  const answer = String(randomProgression[randomIndex]);
  randomProgression[randomIndex] = '..';
  const question = randomProgression.join(' ');
  return [question, answer];
};

export default () => {
  startGame(gameRules, getQuestionAndAnswer);
};
