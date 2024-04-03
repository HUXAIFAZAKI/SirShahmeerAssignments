// BMI = weight (kg) / height (m)^2
import inquirer from "inquirer";
function calcBMI(weight, height) {
    height = height / 100;
    let bmi = weight / ((height) ** 2);
    bmi = Math.round(bmi * 10) / 10;
    if (bmi < 18.5) {
        console.log(`Your BMI is ${bmi}. You are underweight.`);
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log(`Your BMI is ${bmi}. You are healthy.`);
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        console.log(`Your BMI is ${bmi}. You are overweight.`);
    }
    else if (bmi > 30) {
        console.log(`Your BMI is ${bmi}. You are obese.`);
    }
    else {
        console.log(`Invalid Input`);
    }
}
let isRunning = true;
while (isRunning) {
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "weight",
            message: "Enter your weight in KG: "
        },
        {
            type: "input",
            name: "height",
            message: "Enter your height in centimeter: "
        }
    ]);
    calcBMI(answer.weight, answer.height);
    let exit = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "Do you wish to continue ?",
            choices: ["Yes", "No"]
        }
    ]);
    if (exit.option == "Yes") {
        console.clear();
    }
    else if (exit.option == "No") {
        console.clear();
        console.log("Exiting Program ...");
        isRunning = false;
    }
}
