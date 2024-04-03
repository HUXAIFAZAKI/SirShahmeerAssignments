import inquirer from "inquirer";
function isAnagram(str1:string,str2:string):boolean
{
    str1 = str1.toLowerCase().split('').sort().join('');
    str2 = str2.toLowerCase().split('').sort().join('');
    if (str1 === str2) {return true}
    else {return false;}
}

let isRunning = true;
while(isRunning)
{
    const answer = await inquirer.prompt([
        {
          type: "input",
          name: "word1",
          message: " Enter your first word to check wheather its anagram or not:-\n",
        },
        {
          type: "input",
          name: "word2",
          message: " Enter your second word to check wheather its anagram or not:-\n",
        }
    ]);

      let anagram = isAnagram(answer.word1,answer.word2);
      if (anagram) {console.log(`"${answer.word1}" is a anagram of "${answer.word2}"`);}
      else if (!anagram) {console.log(`"${answer.word1}" is not a anagram of "${answer.word2}"`);}
      
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