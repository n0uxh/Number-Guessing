#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Guess the number between 1-10:",
    },
]);

if (answers.userguessednumber === randomNumber) {
    console.log("Congratulations! You are a genius.");
} else {
    console.log("You guessed WRONG!");
}
