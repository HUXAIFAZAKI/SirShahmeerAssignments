import inquirer from "inquirer";
function generatePassword(length) {
    if (length < 1) {
        console.log("Password length must be at least 1 character.");
    }
    const characterPool = `${"abcdefghijklmnopqrstuvwxyz"}` +
        `${"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}` +
        `${"0123456789"}` +
        `${`!@#$%^&*()_+-=[]{};:\'"\\|,.<>/?`}`;
    const password = [];
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password.push(characterPool[randomIndex]);
    }
    return password.join('');
}
let isRunning = true;
while (isRunning) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "userlenght",
            message: "Enter your desired password lenght : ",
        },
    ]);
    const password = generatePassword(answer.userlenght);
    console.log(password);
    let exit = await inquirer.prompt([
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
