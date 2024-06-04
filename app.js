import inquirer from "inquirer";
import { subtraction, sum, division, multiplication } from "./operations.js";
const questions = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your first number",
    },
    { type: "number",
        name: "num2",
        message: "Enter your second number",
    },
    { type: "list",
        name: "operator",
        message: "select your operator",
        choices: ["-", "+", "/", "*"],
    }
]);
console.log("questions:", questions);
if (questions.operator == "-") {
    console.log("this is subtraction");
    subtraction(questions.num1, questions.num2);
}
else if (questions.operator == "+") {
    console.log("this is sum");
    sum(questions.num1, questions.num2);
}
else if (questions.operator == "/") {
    console.log("this is division");
    division(questions.num1, questions.num2);
}
else if (questions.operator == "*") {
    console.log("this is multiplication");
    multiplication(questions.num1, questions.num2);
}
else {
    console.log("invalid opertaion");
}
