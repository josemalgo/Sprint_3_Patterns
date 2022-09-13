export class Game {

    constructor () {
        this.players = [];
        this.isStartGame = false;
        Scoreboard._instance.start();
    }

    registerPlayers (player){
        //TODO comprobar que no se repitan los jugadores
        if (this.players.length >= 5) {
            return;
        }

        this.players.push(player);
    }

    start () {
        
        this.infoGame();
        
        for (let player in players) {
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

    checkWinner (player) {
        return (player.getPoint() === 2);
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