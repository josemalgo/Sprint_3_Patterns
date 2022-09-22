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

middle.use((req, next) => {
  console.log(`El cuadrat de ${req.a} es ${Math.pow(req.a, 2)}`);
  next();
});

middle.use((req, next) => {
  console.log(`El cuadrat de ${req.a} es ${Math.pow(req.a, 3)}`);
  next();
});

middle.use((req, next) => {
  console.log(`La divisio entre ${req.a} i ${req.b} es ${req.a / req.b}`);
  next();
});

console.log(middle.add(numbers[0]));


