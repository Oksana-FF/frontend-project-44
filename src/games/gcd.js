import readlineSync from 'readline-sync';
import getWelcome from '../index.js';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

export default function gcdGame() {
  const userName = getWelcome();
  console.log('Find the greatest common divisor of given numbers');

  for (let i = 0; i < 3; i += 1) {
    const runNumber1 = Math.floor(Math.random(1, 20) * (20 - 1 + 1)) + 1;
    const runNumber2 = Math.floor(Math.random(1, 20) * (20 - 1 + 1)) + 1;
    console.log(`Question: ${runNumber1} ${runNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = NOD(runNumber1, runNumber2);

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;( Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
