class Middleware {

    constructor(target) {
        this.target = target;
        this.middlewares = [];

        let proto = Object.getPrototypeOf(this.target);
        Object.getOwnPropertyNames(proto).forEach(prop => {
            console.log(prop);
        });
    }
}

module.exports = Middleware;