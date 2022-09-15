export class Scoreboard {

    static #instance;

    constructor() {

    }

    static getScoreboard() {

        if (Scoreboard.#instance) {
            return Scoreboard.#instance;
        }

        return Scoreboard.#instance = new Scoreboard();
    }

    start() {
        console.log('Jugadores - puntuación');
    }

    addPoint() {

    }

    quitPoint() {

    }

    calcWinner() {

    }

    showResult(game) {
        console.log("Marcador");
        for (let player of game.players) {
            console.log(`${player.name} - ${player.getPoints()}`);
        }
    }

    showWinner(player) {
        console.log(`El jugador ${player.name} ha ganado la partida!`);
    }
}