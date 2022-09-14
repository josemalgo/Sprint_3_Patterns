export class Scoreboard {

    static #instance;

    constructor () {
        
    }

    static getScoreboard () {
        
        if (Scoreboard.#instance) {
            return Scoreboard.#instance;
        }

        return Scoreboard.#instance = new Scoreboard();
    }

    start () {
        console.log('Jugadores - puntuación');
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