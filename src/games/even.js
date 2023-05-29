import readlineSync from 'readline-sync';
import getWelcome from '../index.js';

export default function evenGame() { 
  const userName = getWelcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  function evenNumber(number) {
    let result = '';
    if (number % 2 === 0) {
      result = true;
    }
    return result;
  }

 for (let i = 0; i < 3; i += 1) {
    const runNumber = Math.floor(Math.random(1, 100) * (100 - 1 + 1)) + 1;
    console.log(`Question: ${runNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = evenNumber(runNumber) ? 'yes' : 'no';   
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;( Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
