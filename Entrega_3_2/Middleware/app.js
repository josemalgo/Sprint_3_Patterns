const Middleware = require('./middleware');
const numbers = require('./numbers.json');

function Maths() {

}

Maths.prototype.add = function(req) {
  return req.a + req.b;
}

Maths.prototype.substract = function(req) {
  return req.a - req.b;
}

Maths.prototype.multiply = function(req) {
  return req.a * req.b;
}

let calc = new Maths();
let middle = new Middleware(calc);


