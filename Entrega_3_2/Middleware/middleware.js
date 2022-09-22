class Middleware {

    constructor(target) {
        this.target = target;
        this.middlewares = [];
    }
}

module.exports = Middleware;