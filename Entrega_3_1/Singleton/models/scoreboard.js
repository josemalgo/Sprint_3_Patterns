export class Scoreboard {

    static _instance;

    constructor () {
        
        if (Scoreboard._instance) {
            return Scoreboard._instance;
        }

        Scoreboard._instance = this;
    }

    start() {

    }

    addPoint () {

    }

    quitPoint () {

    }

    calcWinner () {

    }

    showResult () {
        console.log("Marcador");
        console.log(`${this.namePlayer1} - ${this.namePlayer2}`);
        console.log(`${this.pointsPlayer1} - ${this.pointsPlayer2}`);
    }

    showWinner (player) {
        this.showResult();
        console.log(`El jugador ${player.name} ha ganado la partida!`);
    }
}