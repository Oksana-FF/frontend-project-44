import readlineSync from 'readline-sync';
import getWelcome from '../index.js';

export default function primeGame() {
    
 const userName = getWelcome();
 console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

 function primeNumber(number) {
    for (let x = 2; x < number; x += 1) {
        if (number % x === 0) return false;
    }
    return number !== 1;
 }

 for (let i = 0; i < 3; i += 1) {

  const runNumber = Math.floor(Math.random(1, 100) * (100 - 1 + 1)) + 1;
  console.log(`Question: ${runNumber}`); 
        
  const userAnswer = readlineSync.question('Your answer: ');

  const correctAnswer = primeNumber(runNumber) ? 'yes' : 'no';
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    } else { 
    console.log(`${userAnswer} is wrong answer ;( Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    return ;
    }
 }
 
 console.log(`Congratulation, ${userName}!`);
}