import randomNumber from '../random-number.js';
import start from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => ((b === 0) ? a : gcd(b, a % b));

const taskResult = () => {
  const firstNumber = randomNumber(1, 50);
  const secondNumber = randomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(gcd(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const startgcd = () => {
  start(rules, taskResult);
};

export default startgcd;
