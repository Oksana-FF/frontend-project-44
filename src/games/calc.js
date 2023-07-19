import { getGame, runNumber } from '../index.js';

const missionGame = 'What is the result of the expression?';

const calc = (runNumber1, runNumber2, operation) => {
  switch (operation) {
    case '+':
      return runNumber1 + runNumber2;
    case '-':
      return runNumber1 - runNumber2;
    case '*':
      return runNumber1 * runNumber2;
    default:
      return null;
  }
};

const game = () => {
  const runNumber1 = runNumber(1, 10);
  const runNumber2 = runNumber(1, 10);
  const arrOperator = ['+', '-', '*'];
  const ranOperation = arrOperator[Math.floor(Math.random() * arrOperator.length)];
  const operation = ranOperation;
  const compute = `${runNumber1} ${ranOperation} ${runNumber2}`;
  const answer = calc(runNumber1, runNumber2, operation);
  return [compute, answer];
};

export default () => {
  getGame(missionGame, game);
};
