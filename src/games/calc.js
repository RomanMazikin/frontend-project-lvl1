import randomNumber from '../random-number.js';
import start from '../index.js';

const rules = 'What is the result of the expression?';
const operation = ['+', '-', '*'];

const calculate = (num1, operat, num2) => {
    switch (operat) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            return "wrong operator";
    };
};

const taskResult = () => {
    const firstNumber = randomNumber(0, 10);
    const secondNumber = randomNumber(0, 10);
    const randomOperation = operation[randomNumber(0, operation.length - 1)];
    const question = `${firstNumber} ${randomOperation} ${secondNumber}`;
    const correctAnswer = String(calculate(firstNumber, randomOperation, secondNumber));
    return [question, correctAnswer];
};

const startCalculate = () => {
    start(rules, taskResult);
};

export default startCalculate;