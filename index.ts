#! user\bin\env Node

import inquirer from "inquirer";

type ansType ={
    userNumber: number
}

const systemGenratedNuber = Math.floor(Math.random() * 10);

// console.log(systemGenratedNuber);

const answers:ansType = await inquirer.prompt([
    {
        type: "input",
        name: "userNumber",
        message: "Guess a number between 0 to 10 -->"
    }
])

const {userNumber} = answers;


console.log(`User Number: ${userNumber} , System Generated Number: ${systemGenratedNuber}`); //
if(userNumber == systemGenratedNuber){
    console.log("Congrats you won");
} else{
    console.log("Sorry you lost \n Try again later");
}


