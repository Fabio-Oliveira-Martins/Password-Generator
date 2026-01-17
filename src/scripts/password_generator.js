export class PasswordGenerator {
    constructor() {
        this.lower = `abcdefghijklmnopqrstuvwxyz`;
        this.upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
        this.numbers = `0123456789`;
        this.symbols = `!@#$%^&*()_+-=[]{}|;':",./<>?~`;        
        this.allChar = this.lower + this.upper + this.numbers + this.symbols;
        this.charLimit = 14;
        this.charList = [];
    }

    randomNumber() {
        const min = 0;
        const max = this.allChar.length;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    createPassword() {
        for(let i = 0; i < this.charLimit; i++) {
            const random = this.randomNumber();

            this.charList.push(this.allChar[random]);
            
            if(i === this.charLimit) {
                break;
            }
        }

        return this.charList.join("");
    }
}
