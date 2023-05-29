import readlineSync from 'readline-sync';
import getWelcome from '../index.js';

export default function calcGame() {
  const userName = getWelcome();
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const runNumber1 = Math.floor(Math.random(1, 10) * (10 - 1 + 1)) + 1;
    const runNumber2 = Math.floor(Math.random(1, 10) * (10 - 1 + 1)) + 1;

    const operation = ['+', '-', '*'];
    const ranIndex = Math.floor(Math.random() * operation.length);
    const ranOperation = operation[ranIndex];
    console.log(`Question: ${runNumber2} ${ranOperation} ${runNumber1}`);
    const userAnswer = readlineSync.question('Your answer: ');

    let correctAnswer = 0;
    switch (ranOperation) {
      case '+':
        correctAnswer = runNumber2 + runNumber1;
        break;
      case '-':
        correctAnswer = runNumber2 - runNumber1;
        break;
      case '*':
        correctAnswer = runNumber2 * runNumber1;
        break;
      default:
        console.log('error');
    }

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;( Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
