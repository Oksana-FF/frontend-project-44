import readlineSync from 'readline-sync';

export const runNumber = (max, min) => Math.floor(Math.random() * (max - min)) + min;

export const getGame = (missionGame, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(missionGame);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== String(answer)) {
      console.log(`'${userAnswer}' is wrong answer ;( Correct answer was '${answer}'. \nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
