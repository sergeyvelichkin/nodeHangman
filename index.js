let Word = require('./word');

let inquirer = require("inquirer");

let arrOfwords = ["matrix"];

let randomWord = arrOfwords[Math.floor(Math.random() * arrOfwords.length)]

let newWord = new Word(randomWord);
newWord.makeArr(randomWord);

let i = 10
console.log("Number of guesses left " + i);
newWord.toRepresent();

function ask(){

        inquirer
        .prompt({
            type: 'input',
            name: 'letter',
            message: "What's your next letter to guess?",
        })
        .then((answers) => {
            i--;
            console.log("Number of guesses left " + i);
            newWord.checkIfwin();
            newWord.toCheck(answers.letter);
            newWord.toRepresent();
            if (i > 0){
                ask();
            }
        });
}

ask()

