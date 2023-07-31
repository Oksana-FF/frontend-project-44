import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const missionGame = 'What is the result of the expression?';

const calcExpression = (randomNumber1, randomNumber2, operation) => {
  let answer = '';
  switch (operation) {
    case '+':
      answer = String(randomNumber1 + randomNumber2);
      break;
    case '-':
      answer = String(randomNumber1 - randomNumber2);
      break;
    case '*':
      answer = String(randomNumber1 * randomNumber2);
      break;
    default:
      break;
  }
  return answer;
};

const getGame = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const arrOperator = ['+', '-', '*'];
  const ranOperation = arrOperator[getRandomNumber(1, arrOperator.length)];
  const operation = ranOperation;
  const question = `${randomNumber1} ${ranOperation} ${randomNumber2}`;
  const answer = String(calcExpression(randomNumber1, randomNumber2, operation));
  return [question, answer];
};

export default () => {
  startGame(missionGame, getGame);
};
