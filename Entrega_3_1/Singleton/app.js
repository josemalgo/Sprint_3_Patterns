import { Player } from './models/player.js';
import { Game } from './models/game.js';
import { Scoreboard } from './models/scoreboard.js';

const player1 = new Player(prompt('Introduce el nombre del primer jugador: ' ));
const player2 = new Player(prompt('Introduce el nombre del segundo jugador: ' ));
const player3 = new Player(prompt('Introduce el nombre del tercer jugador: ' ));
const player4 = new Player(prompt('Introduce el nombre del cuarto jugador: ' ));
const player5 = new Player(prompt('Introduce el nombre del quinto jugador: ' ));

const game = new Game();

mostrarMenu();
chooseOption();

//TODO cambiar entrada de datos por teclado
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    readline.close();
  });

function mostrarMenu () {
    console.log('+++++++++  Menú  ++++++++++');
    console.log('1 - Añadir jugador.');
    console.log("2 - Jugar.")
    console.log("3 - Marcador.")
    console.log('4 - Salir.');
}

function chooseOption () {

    while (true) {
        mostrarMenu();
        let option = prompt('Escoge una opción: ');

        switch (option) {
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
                Scoreboard._instance.showResult();
                break;
            case 4:
                return;
            default:
                console.log('La opción no es valida.');
        }
    }
}

function addPlayer () {
    console.log('+++++++++++  Jugadores  +++++++++++++');
    console.log(`1 - ${player1}.`);
    console.log(`2 - ${player2}.`);
    console.log(`3 - ${player3}.`);
    console.log(`4 - ${player4}.`);
    console.log(`5 - ${player5}.`);
    let option = prompt('Escpoge el jugador que quieres añadir: ');

    switch (option) {
        case 1:
            game.registerPlayer(player1);
            break;
        case 2:
            game.registerPlayer(player2);
            break;
        case 3:
            game.registerPlayer(player3);
            break;
        case 4:
            game.registerPlayer(player4);
            break;
        case 5:
            game.registerPlayer(player5);
            break;
        default:
            console.log('La opción no es valida.');
            return;
    }

    console.log('Jugador añadido.');
}