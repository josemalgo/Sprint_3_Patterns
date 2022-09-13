export class Player {
    constructor (name) {
        this.name = name;
        this.points = 0;
    }

    throwTheBall () {
        console.log(`${this.name} Intenta un tiro`);
        return Math.floor(Math.random() * 2);
    }

    setPoints () {
        this.points++;
    }

    getPoints () {
        return this.points;
    }

    infoPlayers() {

    }
}