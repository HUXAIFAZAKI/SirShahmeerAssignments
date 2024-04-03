import inquirer from "inquirer";

let isRunning = true;
while (isRunning) {
  const answer = await inquirer.prompt([
    {
      type: "number",
      name: "number",
      message: "Enter your number to calculte factorial of : ",
    },
  ]);
  let b = [1];
  function factorial() {
    for (let i = 1; i <= answer.number; i++) {
      b.push(i);
    }
  }
  factorial();
  let c = b.reduce((a, b) => a * b);
  console.log(c);
  const exit = await inquirer.prompt([
    {
      type: "list",
      name: "exit",
      message: "Do you wish to continue",
      choices: ["Yes", "No"],
    },
  ]);
  if(exit.exit == "Yes")
  {
    console.clear()
  }
  else if(exit.exit == "No")
  {
    isRunning = false
    process.exit()
  }
}
