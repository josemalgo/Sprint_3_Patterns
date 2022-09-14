import { Player } from './models/player.js';
import { Game } from './models/game.js';
import { Scoreboard } from './models/scoreboard.js';
import readline from 'node:readline';
import process from 'node:process';

const players = [
new Player('Jose'),
new Player('Jenny'),
new Player('Meli'),
new Player('Vane'),
new Player('JuanMa')];

const game = new Game();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

chooseOption();

function getMenu() {
    return `+++++++++  Menú  ++++++++++
    1 - Añadir jugador.
    2 - Jugar.
    3 - Marcador.
    4 - Ver Jugadores añadidos.
    5 - Salir.`;
}

function chooseOption() {

    console.log(getMenu());
    
    rl.question('Escoge una opción: ', function(answer) {
        if(+answer === 5) {
            return rl.close();
        }
        execOption(+answer);
        chooseOption();
});
}

function execOption(answer) {
    
    switch (answer) {
        case 1:
            addPlayer();
            break;
        case 2:
            game.start()
            if (game.checkWinner()) {
                game.endGame();
            }
            break;
        case 3:
            Scoreboard.getScoreboard().showResult();
            break;
        case 4:
            showPlayers();
            game.showRegisterPlayers();
            return;
        default:
            console.log('La opción no es valida.');
            return;
    };
}

function showPlayers () {
    console.log('Jugadores disponibles');
    for (let player of players) {
        console.log(player.name);
    }
}

function addPlayer() {

    game.registerPlayer(players[0]);
    players.shift();
    
}