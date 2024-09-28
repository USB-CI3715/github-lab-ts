// Endpoint for querying the fibonacci numbers

const fibonacci : NodeRequire = require("./fib");

export default (req, res) => {
  const { num } : { num: string } = req.params;

  const fibN : number = fibonacci(parseInt(num));
  let result : string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
