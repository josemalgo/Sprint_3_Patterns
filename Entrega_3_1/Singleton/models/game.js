import { Scoreboard } from "./scoreboard.js";

export class Game {

    constructor () {
        this.players = [];
        this.isStartGame = false;
        Scoreboard.getScoreboard().start();
    }

    registerPlayer (player){
        //TODO comprobar que no se repitan los jugadores
        if (this.players.length >= 5) {
            return false;
        }

        this.players.push(player);
        return true;
    }

    showRegisterPlayers () {
        console.log('Jugadores registrados');

        if (this.players.length === 0) {
            console.log("Aún no hay jugadores registrados.");
            return;
        };

        for (let player of this.players) {
            console.log(player.name);
        }
    }

    start () {
        
        this.infoGame();
        
        for (let player of this.players) {
            let attempt = player.throwTheBall();
            this.scorePoint(player, attempt);
            //TODO: accesores propiedades y funciones
        }
    }

    scorePoint (player, attempt) {

        if (attempt === 0) {
            console.log('Has fallado!');
            return;
        }

        console.log('Has acertado!');
        player.setPoints();
    }

    updateScoreboard () {
    
    }

    checkWinner () {

        for (let player of this.players) {
            if (player.getPoints() === 2) {
                return true;
            }
        }

        return false
    } 

    infoGame () {
        this.isStartGame = true;
        console.log("Comienza el partido!!");
        console.log("Gana el primero que llegue a dos");
    }

    endGame () {
        
        let playerWin = {};

        for (let player in players) {
            if (player.getPoint() === 2) {
                playerWin = player;
            }
        }
        Scoreboard._instance.showWinner(playerWin);
        this.isStartGame = false;
    }
}