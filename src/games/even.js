import randomNumber from '../random-number.js';
import start from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

const taskResult = () => {
  const number = randomNumber(0, 100);
  const question = number;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEven = () => start(rules, taskResult);

export default startEven;
