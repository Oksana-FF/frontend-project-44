import readlineSync from 'readline-sync';
import getWelcome from '../index.js';

export default function progressionGame() {
  const userName = getWelcome();
  console.log('What number is missing in the progression?');

  for (let x = 0; x < 3; x += 1) {
    const lenghtPrg = Math.floor(Math.random(5, 10) * (10 - 5)) + 5;
    const firstNumber = Math.floor(Math.random(1, 20) * (20 - 1)) + 1;
    const step = Math.floor(Math.random(2, 4) * (4 - 2)) + 2;

    const runProgression = [];
    runProgression[0] = firstNumber;
    for (let i = 1; i <= lenghtPrg; i += 1) {
      runProgression[i] = firstNumber + i * step;
    }
    const len = runProgression.length - 1;
    const runIndex = Math.floor(Math.random(0, len) * (len - 0)) + 0;
    const safeIndex = runProgression[runIndex];
    runProgression[runIndex] = '..';
    const correctArr = runProgression.join(' ');
    console.log(`Question: ${String(correctArr)}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === safeIndex) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;( Correct answer was '${safeIndex}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
