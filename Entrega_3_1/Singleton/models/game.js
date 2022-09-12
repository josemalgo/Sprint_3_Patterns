class Game {

    constructor () {
        this.player1 = {};
        this.player2 = {};
        this.turn = 0;
        this.resgisterPlayer();
        this.drawTurn();
        this.startMatch();
    }

    registerPlayers (){
        let namePlayer = prompt('Introduce el nombre del primer jugador: ' ))
        this.player1 = new Player(namePlayer);
        namePlayer = prompt('Introduce el nombre del segundo jugador: ' ))
        this.player2 = new Player(namePlayer);
    }

    drawTurn (){
        if ((Math.floor(Math.random() * 2)) === 0) {
            this.turn = 0;
        }

        this.turn = 1;

    }

    startScoreboard () {
        Scoreboard._instance.start();
    }

    startMatch () {
        console.log("Comienza el partido!!");
        for (let i = 0; i < 10; i++) {
            if(turn === 0) {
                if(this.scorePoint(this.player1.throwTheBall())) {
                    this.player1.setPoints();
                }
                this.turn++;
            }
            else {
                if(this.scorePoint(this.player2.throwTheBall())) {
                    this.player2.setPoints();
                }
                this.turn--;
            }
        }

        console.log("Fin del partido!");
        console.log(`El resultado final es: ${scoreboard.result()}`);
    }

    scorePoint (shoot) {
        if(shoot === 0) {
            return false;
        }

        return true;
    }
}