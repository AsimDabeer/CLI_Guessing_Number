#! /usr/bin/env node

import inquirer from "inquirer";


//Step 1- Computer Will generate a random Number


//Step 2 - User input for guessing number

// Step 3 - compare user input with user generated number and show result

const randomNumber = Math.floor(Math.random()*10);


const answers = await inquirer.prompt([

    {
        name:"UserGuessedNumber",
        type:"number",
        message: "Please guess a number between 1 to 10"

    }

]);

console.log(answers);

if(answers.UserGuessedNumber===randomNumber){
    console.log(`Congratulations! you guessed correct number`);
}
else{
    console.log(`Oops ! you guessed incorrect number`);
}