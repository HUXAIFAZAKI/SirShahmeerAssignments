import inquirer from "inquirer";

function isPrime(num: number): boolean {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let isRunning = true;
while (isRunning) {
  const answer = await inquirer.prompt([
    {
      type: "number",
      name: "number",
      message: "Enter your number to check wheather its prime or not :-\n",
    },
  ]);
  let prime = isPrime(answer.number)
  if(prime){console.log(`${answer.number} is a Prime Number`);}
  else if(!prime){console.log(`${answer.number} is a not a Prime Number`);}

  let exit = await inquirer.prompt([
    {
        type: "list",
        name: "option",
        message: "Do you wish to continue ?",
        choices: ["Yes", "No"]
    }
  ])
  if(exit.option == "Yes"){console.clear()}
  else if(exit.option == "No")
  {
    console.clear()
    console.log("Exiting Program ...");
    isRunning = false;
  }
}
