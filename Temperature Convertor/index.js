"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function toFahrenheit(celsiusTemp) {
    return (9 / 5) * celsiusTemp + 32;
}
function toCelsius(fahrenheitTemp) {
    return ((fahrenheitTemp - 32) * 5) / 9;
}
let isRunning = true;
while (isRunning) {
    let answer = await inquirer_1.default.prompt([
        {
            type: "number",
            name: "temperature",
            message: "Enter your temperature : ",
        },
        {
            type: "list",
            name: "choice",
            message: "What would you like to convert it in?",
            choices: ["Celsius", "Fahrenheit"],
        },
    ]);
    if (answer.choice === "Celsius") {
        console.log(toCelsius(answer.temperature) + "°C");
    }
    else if (answer.choice === "Fahrenheit") {
        console.log(toFahrenheit(answer.temperature) + "°F");
    }
    let exit = await inquirer_1.default.prompt([
        {
            type: "list",
            name: "option",
            message: "Do you wish to continue?",
            choices: ["Yes", "No"],
        },
    ]);
    if (exit.option == "Yes") {
        console.clear();
        continue;
    }
    else if (exit.option == "No") {
        console.clear();
        isRunning = false;
    }
}
