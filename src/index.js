import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const start = (rules, taskResult ) => {
    console.log('Welcome to the Brain Games!');
    const namePlayer = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${namePlayer}!`);
    console.log(rules);

    for (let i = 0; i < numberOfRounds; i += 1) {
        const [question, correctAnswer] = taskResult();
        console.log(`Question: ${question}`);
        const playerAnswer = readlineSync.question('Your answer: ');

        if (correctAnswer !== playerAnswer) {
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${namePlayer}!`);
            return;
        }
        else {
            console.log('Correct!');
        }
    }
    console.log(`Congratulations, ${namePlayer}!`);
};

export default start;