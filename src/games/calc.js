import readlineSync from 'readline-sync';
import getWelcome from '../index.js';


export default function calcGame() {
    
 const userName = getWelcome();

 for (let i = 0; i < 3; i += 1) {
  console.log('What is the result of the expression?');

  const runNumber1 = Math.floor(Math.random(1, 100) * (100 - 1 + 1)) + 1;
  const runNumber2 = Math.floor(Math.random(1, 100) * (100 - 1 + 1)) + 1;
  
  const operation = ['+', '-', '*'];
  const ranIndex = Math.floor(Math.random() * operation.length);
  const ranOperation = operation[ranIndex];
  console.log(`Question: ${runNumber2} ${ranOperation} ${runNumber1}`); 
        
  const userAnswer = readlineSync.question('Your answer: ');
        
  //octanovilas tut


  
    
 }
 console.log(`Congratulation, ${userName}!`);
}