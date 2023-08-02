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
      console.log('error');
      return undefined;
  }
};

const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const ranOperator = operators[getRandomNumber(1, operators.length)];
  const operation = ranOperator;
  const question = `${randomNumber1} ${ranOperator} ${randomNumber2}`;
  const answer = String(calcExpression(randomNumber1, randomNumber2, operation));
  return [question, answer];
};

export default () => {
  startGame(gameRules, getQuestionAndAnswer);
};
