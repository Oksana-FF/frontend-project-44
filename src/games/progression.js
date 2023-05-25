import getWelcome from '../index.js';
import readlineSync from 'readline-sync';



export default function progressionGame() {
 const userName = getWelcome();
 console.log('What number is missing in the progression?');

 const lenghtPrg = 10;
 const firstNumber = Math.floor(Math.random(1, 20) * (20 - 1 + 1)) + 1;
 const step = Math.floor(Math.random(2, 4) * (4 - 1 + 1)) + 1;
 
 // nado napisat funkciu
 function getProgression(firstNumber; step) {
    const runProgression = [];
 
 
 
  }
 

 for (let i = 0; i < 3; i += 1) {
    
    
    
    console.log(`Question: ${}`); 



 if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!');
    } else { 
    console.log(`${userAnswer} is wrong answer ;( Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    return ;
    }
 }
 console.log(`Congratulation, ${userName}!`);
}