import inquirer from "inquirer";
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
// for (let i = 0; i < 10; i++)
// {
//     console.log(fibonacci(i));
// }
let isRunning = true;
while (isRunning) {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "number",
            message: "Enter your number to generate fabonnaci sequence of it :-\n",
        },
    ]);
    for (let i = 0; i < answer.number; i++) {
        console.log(fibonacci(i));
    }
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
