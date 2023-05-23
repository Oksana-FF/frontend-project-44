import readlineSync from 'readline-sync';

export default function evenGame() {
console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

for (let i = 0; i < 3; i += 1) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const runNumber = Math.floor(Math.random(1, 100) * (100 - 1 + 1)) + 1;
  console.log(`Question: ${runNumber}`); 
        
  const userAnswer = readlineSync.question('Your answer: ');
        
  if ((runNumber % 2 === 0 && userAnswer === 'yes') || (runNumber % 2 !== 0 && userAnswer === 'no')) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;( Correct answer was 'no'. \nLet's try again, ${userName}!`);
    return ;
    }
    
}
console.log(`Congratulation, ${userName}!`);
}
  
