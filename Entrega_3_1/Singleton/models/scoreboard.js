class Scoreboard {

    static _instance;

    constructor (namePlayer1, namePlayer2) {
        
        if (Scoreboard._instance) {
            return Scoreboard._instance;
        }

        this.pointsPlayer1 = 0;
        this.pointsPlayer2 = 0;
        this.namePlayer1 = namePlayer1;
        this.namePlayer2 = namePlayer2;

        Scoreboard._instance = this;
    }

    showResult () {
        console.log("Marcador");
        console.log(`${this.namePlayer1} - ${this.namePlayer2}`);
        console.log(`${this.pointsPlayer1} - ${this.pointsPlayer2}`);
    }

    start() {

    }
}