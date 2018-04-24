let Letter = require('./letter.js');

class Word {
    constructor(toGuess){
        this.arr2 = [];
        this.right=1;

    }
    toRepresent(){
        let lettertoGuess = '';
        for (let i =0; i < (this.arr2).length; i++){
            if ((this.arr2[i]).value===false){
                lettertoGuess+=" "+"__";
            }
            else {
                lettertoGuess+=" "+(this.arr2[i]).letter;
            }
        }return console.log(lettertoGuess);
        
    }
    toCheck(ch){
        for (let i =0; i < (this.arr2).length; i++){
            if ((this.arr2[i]).letter === ch){
                (this.arr2[i]).value = true;
                this.right++;

            }

        }
    }
    makeArr(toGuess){
        let arr3 = toGuess.split("");
        arr3.forEach(element => {
            (this.arr2).push(new Letter(element));
        });

    }
    checkIfwin(){
        if (this.right==(this.arr2).length){
            console.log("You win!");
            process.exit();
            
        }
    }
}


module.exports = Word;