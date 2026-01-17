export class PasswordGenerator {
    constructor() {
        this.lower = `abcdefghijklmnopqrstuvwxyz`;
        this.upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
        this.numbers = `0123456789`;
        this.symbols = `!@#$%^&*()_+-=[]{}|;':",./<>?~`;        
        this.allChar = this.lower + this.upper + this.numbers + this.symbols;
        this.charLimit = 5;
        this.charList = [];
    }

    // ===== GERAR NÚMERO ALEATÓRIO ===== //
    randomNumber() {
        return Math.floor(Math.random() * this.allChar.length);
    }

    // ===== GERAR SENHA ALEATÓRIA ===== //
    createPassword() {
        for(let i = 0; i < this.charLimit; i++) {
            const random = this.randomNumber();

            this.charList.push(this.allChar[random]);
        }

        // ----- RETORNAR A SENHA CONCATENADA ----- //
        return this.charList.join("");
    }
}
