import randomNumber from '../random-number.js';
import start from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const Prime = (num) => {
  if (num < 2) return true;
  let isPrime = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

const taskResult = () => {
  const question = randomNumber(1, 100);
  const correctAnswer = Prime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrime = () => {
  start(rules, taskResult);
};

export default startPrime;
