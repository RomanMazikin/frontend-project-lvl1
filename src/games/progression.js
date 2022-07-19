import randomNumber from '../random-number.js';
import start from '../index.js';

const rules = 'What number is missing in the progression?';
const lengthProgression = randomNumber(4, 9);

const makeProgression = () => {
  const minOfRandomNumber = 1;
  const maxStepProgression = 6;
  const maxRandomForinitialNumber = 10;
  let initialNumber = randomNumber(minOfRandomNumber, maxRandomForinitialNumber);
  const step = randomNumber(minOfRandomNumber, maxStepProgression);
  const progression = [];
  progression.push(initialNumber);
  for (let i = 0; i < lengthProgression; i += 1) {
    initialNumber += step;
    progression.push(initialNumber);
  }
  return progression;
};

const taskResult = () => {
  const minOfRandomNumber = 0;
  const progression = makeProgression();
  const secretIndex = randomNumber(minOfRandomNumber, lengthProgression);
  const secretItem = progression[secretIndex];
  progression[secretIndex] = '..';
  const question = progression.join(' ');
  const correctAnswer = String(secretItem);
  return [question, correctAnswer];
};

const startProgression = () => {
  start(rules, taskResult);
};

export default startProgression;
