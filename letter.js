class Letter {
    constructor(letter){
        this.letter = letter;
        this.value = false;
    }
    guessed(){
        if(this.value === true){
            return this.letter;
        }else{
            return "___";
        }
    }
    checkIf(char){
        if (char===this.letter){
            this.value=true;
        }
    }

}

module.exports = Letter;