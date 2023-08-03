import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRules = 'What is the result of the expression?';

const calcExpression = (randomNumber1, randomNumber2, operation) => {
  switch (operation) {
    case '+':
      return randomNumber1 + randomNumber2;
    case '-':
      return randomNumber1 - randomNumber2;
    case '*':
      return randomNumber1 * randomNumber2;
    default:
      break;
  }
  return operation;
};

const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(1, operators.length)];
  const operation = randomOperator;
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const answer = String(calcExpression(randomNumber1, randomNumber2, operation));
  return [question, answer];
};

export default () => {
  startGame(gameRules, getQuestionAndAnswer);
};
